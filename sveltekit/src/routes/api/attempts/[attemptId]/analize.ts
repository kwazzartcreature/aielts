import type { RecordModel } from 'pocketbase';

import { feedbackCriteriaSchema, feedbackSchema } from '$lib/shared/api/schemas';
import { adminPB } from '$lib/shared/api/config';

export const analize = async (attemptId: string, feedbackId: string) => {
	// TODO: Use a real algorithm
	await new Promise((resolve) => setTimeout(resolve, 10000));

	const feedback = feedbackSchema.parse(await adminPB.collection('feedback').getOne(feedbackId));

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
						structuralReview: { feature: [0] },
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
		attemptId,
		{
			analysisEndTime: new Date()
		},
		{ requestKey: 'analysisEndTime' }
	);
};
