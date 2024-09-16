<script lang="ts">
	import { attemptSchema } from '$lib/shared/api/schemas';
	import { onMount } from 'svelte';
	import Answering from './Answering.svelte';
	import Feedback from './Feedback.svelte';
	import Waiting from './Waiting.svelte';

	export let data;

	const attempt = attemptSchema.parse(data.attempt);
	const attemptId = attempt.id!;
</script>

{#if !attempt.answerEndTime}
	<Answering />
{:else if !attempt.analysisEndTime}
	<Waiting {attemptId} />
{:else}
	<Feedback />
{/if}
