<script lang="ts">
	import { attemptSchema } from '$lib/shared/api/schemas';

	export let data;

	const attempts = data.attempts?.map((attempt: unknown) => attemptSchema.parse(attempt));
</script>

<h1>Attempts</h1>

{#if !attempts || attempts.length === 0}
	<h2>No attempts</h2>
{:else}
	<ul>
		{#each attempts as attempt (attempt.id)}
			<li><a href="/app/attempts/{attempt.id}">{attempt.id}</a></li>
		{/each}
	</ul>
{/if}
