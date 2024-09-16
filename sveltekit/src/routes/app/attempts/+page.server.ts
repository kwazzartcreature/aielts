import { adminPB } from '$lib/shared/api/config.js';

export async function load({ locals }) {
	const pb = locals.pb;

	if (!pb.authStore) return {};

	const userId = pb.authStore.model!.id;
	const attempts = await adminPB.collection('attempt').getFullList({ filter: `user="${userId}"` });

	return { attempts };
}
