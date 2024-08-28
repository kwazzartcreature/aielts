import initPocketBase from '$lib/shared/api/config';
import type { Handle } from '@sveltejs/kit';
export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token');

	const pb = await initPocketBase(token);
	// await pb.collection('users').authWithPassword('kwaz', '12345678');

	event.locals.pb = pb;
	return await resolve(event);
};
