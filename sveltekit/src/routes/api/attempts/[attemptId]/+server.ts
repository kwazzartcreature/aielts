import { adminPB } from '$lib/shared/api/config.js';
import {
	attemptSchema,
	feedbackCriteriaSchema,
	feedbackSchema,
	recordSchema
} from '$lib/shared/api/schemas.js';
import type { RecordModel } from 'pocketbase';
import { z } from 'zod';

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

		(async () => {
			await new Promise((resolve) => setTimeout(resolve, 10000));

			const feedback = feedbackSchema.parse(
				await adminPB.collection('feedback').getOne(attempt.feedback!)
			);

			// Calc and Save feedback criteria
			const criteriaPromises: Promise<RecordModel>[] = [];
			let bandCriteriaId: string | null = null;
			const scores: number[] = [];
			for (const criteriaId of feedback.criterions!) {
				const currentCriteria = feedbackCriteriaSchema.parse(
					await adminPB.collection('feedbackCriteria').getOne(criteriaId)
				);

				if (currentCriteria.name === 'band') {
					bandCriteriaId = criteriaId;
				} else {
					const score = Math.ceil(Math.random() * 9);
					scores.push(score);
					criteriaPromises.push(
						adminPB.collection('feedbackCriteria').update(
							criteriaId,
							{
								structuralReview: { feature: [1, 2, 3] },
								score,
								review: "I'm not sure, I'll review it later"
							},
							{ requestKey: currentCriteria.name }
						)
					);
				}
			}
			criteriaPromises.push(
				adminPB.collection('feedbackCriteria').update(bandCriteriaId!, {
					structuralReview: { feature: scores },
					score: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
					review: `This is mock band score: ${scores.reduce((a, b) => a + b, 0) / scores.length}`
				})
			);
			await Promise.all(criteriaPromises);

			await adminPB.collection('attempt').update(
				params.attemptId,
				{
					analysisEndTime: new Date()
				},
				{ requestKey: 'analysisEndTime' }
			);
		})();

		return new Response(null, { status: 201 });
	} else return new Response(null, { status: 400 });
};
