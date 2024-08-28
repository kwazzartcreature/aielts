import PocketBase from 'pocketbase';
import { POCKETBASE_CONNECTION_STRING } from '$env/static/private';

async function initPocketBase(token: string | undefined = undefined) {
	const pb = new PocketBase(POCKETBASE_CONNECTION_STRING);

	if (!token) {
		return pb;
	}

	// Auth user via token
	try {
		pb.authStore.save(token, { verified: false });
		await pb.collection('users').authRefresh();
	} catch (err) {
		console.error(err);
	}

	return pb;
}

export default initPocketBase;
