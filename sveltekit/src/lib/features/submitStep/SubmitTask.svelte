<script lang="ts">
	import Button from '$lib/shared/ui/Button.svelte';

	export let mediaRecorder: MediaRecorder | null;

	const stopRecordingAndProcessLogic = () => {
		if (mediaRecorder && mediaRecorder.state === 'recording') {
			mediaRecorder.stop();
		}
	};
</script>

<Button className="bg-chimera-300" on:click={stopRecordingAndProcessLogic}>
	{'>> next task >>'}
</Button>
