<script lang="ts">
	import clsx from 'clsx';
	import { onMount } from 'svelte';

	import { getRecordingContext } from '$lib/entities/records';
	import { getTaskVisibleContext } from '$lib/entities/tasks';

	const taskVisible = getTaskVisibleContext();

	export let startRecording: Function;
	export let timeSeconds = 0;

	let maxTimeSeconds = 10 * 1;

	$: isGoing = timeSeconds < maxTimeSeconds && !$recording;

	const recording = getRecordingContext();

	onMount(() => {
		const interval = setInterval(() => {
			if (!$taskVisible) return;

			if (!isGoing) {
				startRecording();
				clearInterval(interval);
				return;
			}
			timeSeconds += 1;
		}, 1000);

		return () => {
			if (interval) clearInterval(interval);
		};
	});
</script>

<h3 class={clsx('text-center', { 'opacity-50': !isGoing })}>
	Prepare time left: {maxTimeSeconds - timeSeconds} from {maxTimeSeconds}
</h3>
