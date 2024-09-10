import { initPocketBase } from '$lib/shared/api/config';
import { NODE_ENV } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token');

	console.log('NODE_ENV: ' + NODE_ENV);
	console.log('TOKEN: ' + token);
	const pb = await initPocketBase(token);

	event.locals.pb = pb;
	return await resolve(event);
};
