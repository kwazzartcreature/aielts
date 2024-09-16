import type { RecordModel } from 'pocketbase';
import { z } from 'zod';

import { adminPB } from '$lib/shared/api/config.js';

import { transcribe } from './transcribe';

const schema = z.object({
	section: z.string(),
	questionOffsetsString: z.string(),
	attemptId: z.string(),
	taskId: z.string()
});

export const POST = async ({ request, fetch }) => {
	const formData = await request.formData();
	const audio = formData.get('audio');
	const data = schema.parse(Object.fromEntries(formData));

	const { questionOffsetsString, section, attemptId, taskId } = data;

	let audioRecord: RecordModel | null = null;
	if (section === 'speaking')
		audioRecord = await adminPB.collection('audio').create({ questionOffsetsString, audio });
	const record = await adminPB.collection('record').create({
		task: taskId,
		audio: audioRecord?.id
	});

	await adminPB.collection('attempt').update(attemptId, {
		'records+': record.id
	});

	transcribe(fetch, attemptId, record.id);

	return new Response(null, { status: 201 });
};
