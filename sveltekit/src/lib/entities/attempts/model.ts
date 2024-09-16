import type { attemptSchema } from '$lib/shared/api/schemas';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

import z from 'zod';

export const createAttemptContext = (attempt: z.infer<typeof attemptSchema> | null) => {
	const attemptStore = writable(attempt);
	setContext('attempt', attemptStore);
};

export const getAttemptContext = () => {
	return getContext<Writable<z.infer<typeof attemptSchema> | null>>('attempt');
};
