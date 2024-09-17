import { adminPB } from '$lib/shared/api/config';

export const transcribe = async (
	fetch: typeof globalThis.fetch,
	attemptId: string,
	recordId: string
) => {
	// TODO: Use a real algorithm
	await new Promise((resolve) => setTimeout(resolve, 5000));
	const content = 'Mock transcribe content';

	await adminPB.collection('record').update(recordId, { content });

	await fetch(`/api/attempts/${attemptId}`, {
		method: 'PUT',
		body: JSON.stringify({ step: 'endTranscribing' })
	});
};
