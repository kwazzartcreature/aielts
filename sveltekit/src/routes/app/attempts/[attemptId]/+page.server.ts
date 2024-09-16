import { attemptSchema } from '$lib/shared/api/schemas.js';
import { error } from '@sveltejs/kit';

export async function load({ params, locals }) {
	const pb = locals.pb;
	const attemptId = params.attemptId;

	try {
		const attempt = attemptSchema.parse(await pb.collection('attempt').getOne(attemptId));
		return { attempt };
	} catch (err) {
		console.error(err);
		return error(404, 'Error');
	}
}
