import type { RecordModel } from 'pocketbase';
import { adminPB } from '$lib/shared/api/config.js';
import { z } from 'zod';

const createDTOSchema = z.object({
	type: z.union([z.literal('singlePart'), z.literal('fullSection')]),
	userId: z.string(),
	taskIds: z.array(z.string())
});

export const POST = async ({ request }) => {
	const { type, userId, taskIds } = createDTOSchema.parse(await request.json());

	const task = await adminPB.collection('task').getOne(taskIds[0]);
	const section = task.section;

	// Create feedback criterions
	const criteriaPromises: Promise<RecordModel>[] = [];

	for (const criteria of ['band', 'lexical', 'coherence', 'grammar'])
		criteriaPromises.push(
			adminPB.collection('feedbackCriteria').create({ name: criteria }, { requestKey: criteria })
		);

	if (section === 'speaking')
		criteriaPromises.push(
			adminPB
				.collection('feedbackCriteria')
				.create({ name: 'pronouncation' }, { requestKey: 'pronouncation' })
		);
	else if (section === 'writing')
		criteriaPromises.push(
			adminPB
				.collection('feedbackCriteria')
				.create({ name: 'structure' }, { requestKey: 'structure' })
		);
	else throw new Error('Invalid section or type');

	// Create attempt
	const criteriaIds = (await Promise.all(criteriaPromises)).map((c) => c.id);

	const feedbackId = (
		await adminPB
			.collection('feedback')
			.create({ criterions: criteriaIds }, { requestKey: 'feedback' })
	).id;

	const attempt = await adminPB.collection('attempt').create(
		{
			type,
			section,
			feedback: feedbackId,
			user: userId,
			tasks: taskIds
		},
		{ requestKey: 'attempt' }
	);

	return new Response(JSON.stringify(attempt), { status: 200 });
};
