import type PocketBase from 'pocketbase';
import { getContext, setContext } from 'svelte';
import { readable, type Readable } from 'svelte/store';
import { initPocketBase } from './config';

export const createPBContext = async (token: string | undefined) => {
	const pb = await initPocketBase(token);
	const pbStore = readable(pb);
	setContext('pb', pbStore);
};

export const getPBContext = () => {
	return getContext<Readable<PocketBase>>('pb');
};
