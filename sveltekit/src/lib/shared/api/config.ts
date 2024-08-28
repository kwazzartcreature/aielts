import PocketBase from 'pocketbase';
import { POCKETBASE_CONNECTION_STRING } from '$env/static/private';

function initPocketBase() {
	return new PocketBase(POCKETBASE_CONNECTION_STRING);
}

export default initPocketBase;
