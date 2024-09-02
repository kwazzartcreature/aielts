import { userSchema } from '$lib/shared/api/schemas';

export async function load({ locals }) {
	const pb = locals.pb;
	try {
		const user = userSchema.parse(pb.authStore.model);
		return { user };
	} catch {
		return { user: null };
	}
}
