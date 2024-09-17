<script lang="ts">
	import { getAttemptContext } from '$lib/entities/attempts';
	import { getRecorderContext } from '$lib/entities/records';
	import Button from '$lib/shared/ui/Button.svelte';

	import { submitAttempt } from './model';

	const { mediaRecorder } = getRecorderContext();

	const attempt = getAttemptContext();
</script>

<Button
	className="bg-mindaro-500"
	on:click={() => submitAttempt($attempt?.id || '', $mediaRecorder)}
>
	{'>> submit attempt >>'}
</Button>
