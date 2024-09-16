<script lang="ts">
	import type { z } from 'zod';
	import type { taskSchema } from '$lib/shared/api/schemas';

	export let task: z.infer<typeof taskSchema>;
	export let taskVisible: boolean;
	export let questionIndex: number;

	let questions = task.questions?.slice();
	if (task.part === 2 && questions) questions = questions[0].split('?').filter((q) => q.length > 0);
</script>

{#if taskVisible && questions}
	{#if task.part === 2}
		<h2 class="text-3xl">{task.snippet}</h2>
		<h3 class="text-lg">{questions[0]}</h3>
		<ul class="list-disc px-4">
			{#each questions.slice(1) as question (question)}
				<li class="text-sm">{question}?</li>
			{/each}
		</ul>
	{:else}
		<div>
			<h2 class="text-3xl">{task.snippet}</h2>
			<ul>
				{#if questionIndex > 0}
					<li class="text-sm">{questions[questionIndex - 1]}</li>
				{/if}
				<li class="text-xl">{questions[questionIndex]}</li>
				{#if questionIndex < questions.length - 1}
					<li class="text-sm">{questions[questionIndex + 1]}</li>
				{/if}
			</ul>
		</div>
	{/if}
{:else}
	<h2 class="text-2xl">TASK HIDDEN</h2>
{/if}
