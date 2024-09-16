import { NODE_ENV } from '$env/static/private';
import { type Handle } from '@sveltejs/kit';

import { initPocketBase } from '$lib/shared/api/config';
export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token');

	console.log('NODE_ENV: ' + NODE_ENV);
	console.log('TOKEN: ' + token);
	const pb = await initPocketBase(token);

	event.locals.pb = pb;

	const isAuth = pb.authStore.isValid;
	if (!isAuth && event.url.pathname.startsWith('/app'))
		return new Response(null, { status: 302, headers: { Location: '/sign-in' } });

	return await resolve(event);
};
