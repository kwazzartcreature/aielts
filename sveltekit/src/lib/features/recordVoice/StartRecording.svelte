<script lang="ts">
	import { onMount } from 'svelte';

	import { getAttemptContext } from '$lib/entities/attempts';
	import { getTaskIndexContext, getTaskVisibleContext } from '$lib/entities/tasks';
	import Button from '$lib/shared/ui/Button.svelte';
	import {
		getQuestionOffsetsContext,
		getRecorderContext,
		getRecordingContext,
		getRecordingTimeSecondsContext
	} from '$lib/entities/records';
	import { getQuestionIndexContext } from '$lib/entities/questions';

	import { startRecording } from './model';

	const attempt = getAttemptContext();
	const recording = getRecordingContext();
	const taskVisible = getTaskVisibleContext();
	const questionIndex = getQuestionIndexContext();
	const { reset: resetQuestionOffsets } = getQuestionOffsetsContext();
	const { taskIndex, increment: incrementTaskIndex } = getTaskIndexContext();
	const { startTimer, reset: resetRecordingTime } = getRecordingTimeSecondsContext();
	const { mediaRecorder, audioChunks, audioBlob } = getRecorderContext();

	export let part: number;
	export let section: 'speaking' | 'writing';

	$: attemptId = $attempt?.id || '';
	$: taskId = $attempt?.tasks![$taskIndex] || '';

	const onStartRecording = () => {
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

	onMount(() => {
		if ($attempt?.type === 'singlePart' && part !== 2) onStartRecording();
	});
</script>

<Button on:click={onStartRecording}>{'>> start recording >>'}</Button>
