<script lang="ts">
	import { getAttemptContext } from '$lib/entities/attempts';
	import Button from '$lib/shared/ui/Button.svelte';

	export let mediaRecorder: MediaRecorder | null;

	const attempt = getAttemptContext();

	const stopRecordingAndProcessLogic = () => {
		if (mediaRecorder && mediaRecorder.state === 'recording') {
			mediaRecorder.stop();
		}
	};

	const submitAttempt = async () => {
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

		stopRecordingAndProcessLogic();
		window.location.reload();
	};
</script>

<Button className="bg-mindaro-500" on:click={submitAttempt}>{'>> submit attempt >>'}</Button>
