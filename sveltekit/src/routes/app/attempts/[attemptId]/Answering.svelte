<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import { AnswerQuestion } from '$lib/features/answerQuestion';
	import { StartRecording } from '$lib/features/recordVoice';
	import { getAttemptContext } from '$lib/entities/attempts';
	import { createQuestionIndexContext } from '$lib/entities/questions';
	import {
		createQuestionOffsetsContext,
		createRecordingContext,
		createRecordingTimeSecondsContext
	} from '$lib/entities/records';
	import { createTaskIndexContext } from '$lib/entities/tasks';
	import { Questions } from '$lib/entities/tasks';
	import { taskSchema } from '$lib/shared/api/schemas';
	import Button from '$lib/shared/ui/Button.svelte';
	import { SubmitTask, SubmitAttempt } from '$lib/features/submitStep';

	let mediaRecorder: MediaRecorder | null = null;
	let audioChunks: Blob[] = [];
	let audioBlob: Blob;

	const attempt = getAttemptContext();
	const taskIds = $attempt?.tasks;

	let taskVisible = false;

	const recording = createRecordingContext();
	const questionIndex = createQuestionIndexContext();
	const { questionOffsets } = createQuestionOffsetsContext();
	const { taskIndex } = createTaskIndexContext();
	const { recordingTimeSeconds } = createRecordingTimeSecondsContext();

	const stopRecordingAndProcessLogic = () => {
		if (mediaRecorder && mediaRecorder.state === 'recording') {
			mediaRecorder.stop();
		}
	};

	const submitTask = async () => {
		stopRecordingAndProcessLogic();
	};

	const submitAttempt = async () => {
		await submitTask();

		const res = await fetch(`/api/attempts/${$attempt?.id}`, {
			method: 'PUT',
			body: JSON.stringify({
				step: 'endAnswering'
			})
		});

		if (!res.ok) {
			console.error(await res.text());
			return;
		}

		goto('/app/attempts', { replaceState: true });
	};

	const getTask = async (taskId: string | null) => {
		if (!taskId) return null;

		const response = await fetch(`/api/tasks/${taskId}`);
		if (!response.ok) return null;

		return taskSchema.parse(await response.json());
	};

	$: taskPromise = getTask(taskIds ? taskIds[$taskIndex] : null);

	onMount(() => {
		taskPromise.then((task) => {
			if (!task) return;
			if (task.part === 2 && $attempt?.type === 'singlePart') taskVisible = true;
		});
		if (!$attempt) goto('/app/attempts', { replaceState: true });
	});
</script>

<h1>ANSWERING {$recordingTimeSeconds}</h1>
<pre>{$questionOffsets}</pre>

{#await taskPromise}
	<p>Loading current task</p>
{:then task}
	{#if task && task.questions && taskIds}
		<div class="flex flex-col items-center">
			<Questions {task} {taskVisible} questionIndex={$questionIndex} />

			{#if !$recording && task.part === 2 && !taskVisible}
				<Button on:click={() => (taskVisible = true)}>Part 2: SHOW TASK</Button>
			{:else if !$recording && task.part}
				<StartRecording
					part={task.part}
					bind:mediaRecorder
					bind:audioChunks
					bind:audioBlob
					bind:taskVisible
				/>
			{:else if $questionIndex !== task.questions.length - 1}
				<AnswerQuestion />
			{:else if $taskIndex !== taskIds.length - 1}
				<SubmitTask {mediaRecorder} />
			{:else}
				<SubmitAttempt {mediaRecorder} />
			{/if}
		</div>
	{/if}
{:catch error}
	<p>Error: {error.message}</p>
{/await}
