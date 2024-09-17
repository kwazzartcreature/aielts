<script lang="ts">
	import { getRecorderContext } from '$lib/entities/records';
	import Button from '$lib/shared/ui/Button.svelte';
	import { submitTask } from './model';

	const { mediaRecorder } = getRecorderContext();
</script>

<Button className="bg-chimera-300" on:click={() => submitTask($mediaRecorder)}>
	{'>> next task >>'}
</Button>
