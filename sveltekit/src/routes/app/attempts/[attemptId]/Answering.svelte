<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import { AnswerQuestion } from '$lib/features/answerQuestion';
	import { AutoRecordingStop, startRecording, StartRecording } from '$lib/features/recordVoice';
	import { SpeakingPart2Prepare } from '$lib/features/prepareTime';
	import { getAttemptContext } from '$lib/entities/attempts';
	import { createQuestionIndexContext } from '$lib/entities/questions';
	import {
		createQuestionOffsetsContext,
		createRecorderContext,
		createRecordingContext,
		createRecordingTimeSecondsContext
	} from '$lib/entities/records';
	import { createTaskIndexContext, createTaskVisibleContext } from '$lib/entities/tasks';
	import { Questions } from '$lib/entities/tasks';
	import { taskSchema } from '$lib/shared/api/schemas';
	import Button from '$lib/shared/ui/Button.svelte';
	import { SubmitTask, SubmitAttempt, submitTask, submitAttempt } from '$lib/features/submitStep';

	const maxRecordingTimeSeconds = 10;
	const attempt = getAttemptContext();
	const taskIds = $attempt?.tasks;

	const getTask = async (taskId: string | null) => {
		if (!taskId) return null;

		const response = await fetch(`/api/tasks/${taskId}`);
		if (!response.ok) return null;

		return taskSchema.parse(await response.json());
	};

	$: attemptId = $attempt?.id || '';
	$: taskId = $attempt?.tasks![$taskIndex] || '';
	$: taskPromise = getTask(taskIds ? taskIds[$taskIndex] : null);

	const taskVisible = createTaskVisibleContext();
	const recording = createRecordingContext();
	const questionIndex = createQuestionIndexContext();
	const { questionOffsets, reset: resetQuestionOffsets } = createQuestionOffsetsContext();
	const { taskIndex, increment: incrementTaskIndex } = createTaskIndexContext();
	const {
		recordingTimeSeconds,
		startTimer,
		reset: resetRecordingTime
	} = createRecordingTimeSecondsContext();
	const { mediaRecorder, audioChunks, audioBlob } = createRecorderContext();

	onMount(() => {
		taskPromise.then((task) => {
			if (!task) return;
			if (task.part === 2 && $attempt?.type === 'singlePart') $taskVisible = true;
		});
		if (!$attempt) goto('/app/attempts', { replaceState: true });
	});

	const onStartRecording = (section: 'speaking' | 'writing' | undefined) => {
		if (!section) throw new Error('WTF error');
		startRecording(
			attemptId,
			taskId,
			section,
			mediaRecorder,
			audioChunks,
			audioBlob,
			recording,
			taskVisible,
			questionIndex,
			resetQuestionOffsets,
			resetRecordingTime,
			incrementTaskIndex,
			startTimer
		);
	};
</script>

<AutoRecordingStop
	{maxRecordingTimeSeconds}
	onStop={taskIds && $taskIndex !== taskIds.length - 1
		? () => submitTask($mediaRecorder)
		: () => submitAttempt(attemptId, $mediaRecorder)}
/>

<h1>ANSWERING {$recordingTimeSeconds} / {maxRecordingTimeSeconds}</h1>
<pre>{$questionOffsets}</pre>

{#await taskPromise}
	<p>Loading current task</p>
{:then task}
	{#if task && task.questions && taskIds}
		<div class="flex flex-col items-center">
			{#if task.part === 2}
				<SpeakingPart2Prepare startRecording={() => onStartRecording(task.section)} />
			{/if}
			<Questions {task} taskVisible={$taskVisible} questionIndex={$questionIndex} />

			{#if !$recording && task.part === 2 && !$taskVisible}
				<Button on:click={() => ($taskVisible = true)}>Part 2: SHOW TASK</Button>
			{:else if !$recording && task.part && task.section}
				<StartRecording section={task.section} part={task.part} />
			{:else if $questionIndex !== task.questions.length - 1}
				<AnswerQuestion />
			{:else if $taskIndex !== taskIds.length - 1}
				<SubmitTask />
			{:else}
				<SubmitAttempt />
			{/if}
		</div>
	{/if}
{:catch error}
	<p>Error: {error.message}</p>
{/await}
