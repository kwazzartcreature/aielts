<script lang="ts">
	import { onMount } from 'svelte';

	import { getAttemptContext } from '$lib/entities/attempts';
	import { getQuestionIndexContext } from '$lib/entities/questions';
	import {
		getQuestionOffsetsContext,
		getRecordingContext,
		getRecordingTimeSecondsContext
	} from '$lib/entities/records';
	import { getTaskIndexContext } from '$lib/entities/tasks';
	import Button from '$lib/shared/ui/Button.svelte';

	export let mediaRecorder: MediaRecorder | null;
	export let audioChunks: Blob[];
	export let audioBlob: Blob;

	export let taskVisible: boolean;
	export let part: number;

	const attempt = getAttemptContext();
	const taskIds = $attempt?.tasks;
	const { taskIndex, increment: incrementTaskIndex } = getTaskIndexContext();

	const questionIndex = getQuestionIndexContext();
	const { reset: resetQuestionOffsets } = getQuestionOffsetsContext();

	const recording = getRecordingContext();
	const { reset: resetRecordingTime, startTimer } = getRecordingTimeSecondsContext();

	const sendAudioData = async () => {
		const formData = new FormData();
		formData.append('audio', audioBlob);
		formData.append('section', $attempt?.section!);
		formData.append('attemptId', $attempt?.id!);
		formData.append('taskId', taskIds![$taskIndex]);

		formData.append('questionOffsetsString', localStorage.getItem('questionOffsets')!);
		localStorage.removeItem('questionOffsets');

		try {
			const res = await fetch(`/api/records`, {
				method: 'POST',
				body: formData
			});

			if (!res.ok) console.error(await res.text());
			else console.log('Audio uploaded successfully!');
		} catch (error) {
			console.error('Failed to upload audio:', error);
		}

		$questionIndex = 0;
		$recording = false;
		taskVisible = false;
		resetQuestionOffsets();
		resetRecordingTime();
		incrementTaskIndex();
		audioChunks = [];
	};

	const startRecording = async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		mediaRecorder = new MediaRecorder(stream);

		mediaRecorder.ondataavailable = (event) => {
			audioChunks.push(event.data);
		};

		mediaRecorder.onstop = async () => {
			audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
			await sendAudioData();
		};

		mediaRecorder.start();
		$recording = true;
		startTimer();
		taskVisible = true;
	};

	onMount(() => {
		if ($attempt?.type === 'singlePart' && part !== 2) startRecording();
	});
</script>

<Button on:click={startRecording}>{'>> start recording >>'}</Button>
