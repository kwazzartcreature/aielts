<script lang="ts">
	import { getRecordingTimeSecondsContext } from '$lib/entities/records';

	export let maxRecordingTimeSeconds = 10;
	export let onStop: Function;

	const { recordingTimeSeconds } = getRecordingTimeSecondsContext();
	$: if ($recordingTimeSeconds >= maxRecordingTimeSeconds) onStop();
</script>
