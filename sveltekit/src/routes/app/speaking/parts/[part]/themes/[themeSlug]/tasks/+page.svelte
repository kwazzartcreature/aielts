<script lang="ts">
	import { taskSchema } from '$lib/shared/api/schemas';

	export let data;

	const tasks = data.tasks.map((task: unknown) => taskSchema.parse(task));
</script>

<ul>
	{#each data.tasks as task (task.id)}
		<li>
			<a href="/app/speaking/parts/{data.part}/themes/{data.theme.slug}/tasks/{task.slug}">
				{task.snippet}
			</a>
		</li>
	{/each}
</ul>
