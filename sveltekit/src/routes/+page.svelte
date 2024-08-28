<script lang="ts">
	export let data;
	console.log('ON PAGE USER DATA: ', data.user);
</script>

{#if data.user}
	<h1>Page {data.user.name}</h1>
{:else}
	<h1>Page Anon</h1>
{/if}
