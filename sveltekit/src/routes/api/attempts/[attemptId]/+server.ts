import { adminPB } from '$lib/shared/api/config.js';
import { attemptSchema, recordSchema } from '$lib/shared/api/schemas.js';
import { z } from 'zod';
import { analize } from './analize';

const updateDTOSchema = z.object({
	step: z.union([
		z.literal('endAnswering'),
		z.literal('endTranscribing'),
		z.literal('endAnalyzing')
	])
});

export const GET = async ({ params, locals }) => {
	const pb = locals.pb;
	const attempt = attemptSchema.parse(
		await pb.collection('attempt').getOne(params.attemptId, { requestKey: 'attempt' })
	);
	return new Response(JSON.stringify(attempt), { status: 200 });
};

export const PUT = async ({ request, params }) => {
	const { step } = updateDTOSchema.parse(await request.json());
	if (step === 'endAnswering') {
		await adminPB.collection('attempt').update(
			params.attemptId,
			{
				answerEndTime: new Date()
			},
			{ requestKey: 'answerEndTime' }
		);
		return new Response(null, { status: 200 });
	} else if (step === 'endTranscribing') {
		const attempt = attemptSchema.parse(
			await adminPB
				.collection('attempt')
				.getOne(params.attemptId, { expand: 'records', requestKey: 'attempt' })
		);
		const records: z.infer<typeof recordSchema>[] = attempt
			.expand!.records.map((r: unknown) => recordSchema.parse(r))
			.filter((r: z.infer<typeof recordSchema>) => r.content);

		if (records.length !== attempt.tasks!.length) {
			console.error('Mismatched records and tasks');
			return new Response(null, { status: 400 });
		}

		await adminPB.collection('attempt').update(
			params.attemptId,
			{
				transcribeEndTime: new Date()
			},
			{ requestKey: 'transcribeEndTime' }
		);

		analize(params.attemptId, attempt.feedback!);

		return new Response(null, { status: 201 });
	} else return new Response(null, { status: 400 });
};
