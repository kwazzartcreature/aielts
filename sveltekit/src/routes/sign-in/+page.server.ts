import { loginFormSchema } from '$lib/features/auth';
import { fail } from '@sveltejs/kit';

export const prerender = false;

export const actions = {
	default: async ({ locals, cookies, request }) => {
		const rawFormData = Object.fromEntries(await request.formData());
		const formData = loginFormSchema.safeParse(rawFormData);

		console.log(formData.error);
		if (!formData.success) return fail(400, { error: { message: 'Wrong credentials' } });

		const { identifier, password } = formData.data;
		const pb = locals.pb;

		console.log(identifier, password);

		try {
			await pb.collection('user').authWithPassword(identifier, password);
			cookies.set('token', pb.authStore.token, { path: '/' });
		} catch (err) {
			return fail(err.status, { error: { message: 'Wrong credentials' } });
		}
	}
};
