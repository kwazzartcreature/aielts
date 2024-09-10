<script lang="ts">
	import { taskSchema } from '$lib/shared/api/schemas';

	export let data;

	const task = taskSchema.parse(data.task);
</script>

<h1>Task {task.snippet}</h1>
