import PocketBase from 'pocketbase';
import {
	NODE_ENV,
	POCKETBASE_URL,
	POCKETBASE_ADMIN_EMAIL,
	POCKETBASE_ADMIN_PASSWORD
} from '$env/static/private';

console.log('MODE: ' + NODE_ENV);

export async function initPocketBase(token: string | undefined = undefined) {
	const pb = new PocketBase(POCKETBASE_URL);

	if (!token) {
		return pb;
	}

	// Auth user via token
	try {
		pb.authStore.save(token, { verified: false });
		await pb.collection('user').authRefresh();
		if (!pb.authStore.isValid) throw new Error('AuthStore is not valid');
	} catch (err) {
		console.error(err);
	}

	return pb;
}

export const adminPB = await new PocketBase(POCKETBASE_URL);
await adminPB.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD);
