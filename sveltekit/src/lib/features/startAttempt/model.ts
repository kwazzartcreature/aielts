import type { Writable } from 'svelte/store';
import type { z } from 'zod';
import { goto } from '$app/navigation';

import { attemptSchema } from '$lib/shared/api/schemas';

export const startAttempt = async (
	attemptContext: Writable<z.infer<typeof attemptSchema> | null>,
	type: 'fullSection' | 'singlePart',
	userId: string,
	taskIds: string[]
) => {
	const response = await fetch('/api/attempts', {
		method: 'POST',
		body: JSON.stringify({ type, userId, taskIds })
	});

	if (!response.ok) {
		console.error(await response.text());
		return;
	}

	const attempt = attemptSchema.parse(await response.json());
	attemptContext.set(attempt);
	goto(`/app/attempts/${attempt.id}`);
};
