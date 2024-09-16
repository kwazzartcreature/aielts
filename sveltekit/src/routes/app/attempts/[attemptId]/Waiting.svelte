<script lang="ts">
	export let attemptId: string;

	import { onMount } from 'svelte';
	import { attemptSchema } from '$lib/shared/api/schemas';

	onMount(() => {
		const action = async () => {
			const res = await fetch(`/api/attempts/${attemptId}`);
			const newAttempt = attemptSchema.parse(await res.json());
			if (newAttempt.analysisEndTime) window.location.reload();
		};

		const interval = setInterval(() => {
			action();
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<h1>COMPLETED AND ANALIZING...</h1>
