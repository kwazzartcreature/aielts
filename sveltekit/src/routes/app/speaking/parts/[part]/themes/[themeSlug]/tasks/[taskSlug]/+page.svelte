<script lang="ts">
	import { StartAttempt } from '$lib/features/startAttempt';
	import { taskSchema } from '$lib/shared/api/schemas';

	export let data;

	const task = taskSchema.parse(data.task);
</script>

{#if task.id}
	<h1>Task {task.snippet}</h1>
	<StartAttempt taskIds={[task.id]} type="singlePart" />
{/if}
