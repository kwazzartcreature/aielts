<script lang="ts">
	import { getAttemptContext } from '$lib/entities/attempts/model';
	import { getUserContext } from '$lib/entities/users';
	import Button from '$lib/shared/ui/Button.svelte';

	import { startAttempt } from './model';

	const attempt = getAttemptContext();
	const user = getUserContext();

	export let taskIds: string[];
	export let type: 'fullSection' | 'singlePart';

	const onStartAttempt = async () => {
		if (!$user) return;
		const userId = $user.id;
		await startAttempt(attempt, type, userId!, taskIds);
	};
</script>

<Button on:click={onStartAttempt} variant="solid" size="small">Start Attempt</Button>
