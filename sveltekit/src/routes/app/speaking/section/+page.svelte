<script lang="ts">
	import { StartAttempt } from '$lib/features/startAttempt';

	export let data;
</script>

<h1>Start Full Speaking Section</h1>

<StartAttempt taskIds={data.taskIds} type="fullSection" />
