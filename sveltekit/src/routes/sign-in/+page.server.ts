import { ClientResponseError } from 'pocketbase';
import { fail } from '@sveltejs/kit';

import { loginFormSchema } from '$lib/features/auth';

export const prerender = false;

export const actions = {
	default: async ({ locals, cookies, request }) => {
		const rawFormData = Object.fromEntries(await request.formData());
		const formData = loginFormSchema.safeParse(rawFormData);

		if (!formData.success) return fail(400, { error: { message: 'Wrong credentials' } });

		const { identifier, password } = formData.data;
		const pb = locals.pb;

		try {
			await pb.collection('user').authWithPassword(identifier, password);
			cookies.set('token', pb.authStore.token, { path: '/' });
		} catch (err) {
			if (err instanceof ClientResponseError) {
				return fail(err.status, { error: { message: 'Wrong credentials' } });
			} else
				return fail(500, { error: { message: 'Internal server error. Please try again later.' } });
		}
	}
};
