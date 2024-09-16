<script lang="ts">
	import { getQuestionIndexContext } from '$lib/entities/questions';
	import { getQuestionOffsetsContext, getRecordingTimeSecondsContext } from '$lib/entities/records';
	import Button from '$lib/shared/ui/Button.svelte';

	const questionIndex = getQuestionIndexContext();
	const { questionOffsets, add } = getQuestionOffsetsContext();
	const { recordingTimeSeconds } = getRecordingTimeSecondsContext();

	const answerQuestion = () => {
		$questionIndex++;
		add($recordingTimeSeconds);
		localStorage.setItem('questionOffsets', JSON.stringify($questionOffsets));
	};
</script>

<Button on:click={answerQuestion}>{'>> next question >>'}</Button>
