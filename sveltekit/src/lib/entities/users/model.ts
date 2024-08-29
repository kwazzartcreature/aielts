import type { userSchema } from '$lib/shared/api/schemas';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

import z from 'zod';

export const createUserContext = (user: z.infer<typeof userSchema> | null) => {
	const userStore = writable(user);
	setContext('user', userStore);
};

export const getUserContext = () => {
	return getContext<Writable<z.infer<typeof userSchema> | null>>('user');
};
