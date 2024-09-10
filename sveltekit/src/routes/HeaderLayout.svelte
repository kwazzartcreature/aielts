<script lang="ts">
	import { getUserContext } from '$lib/entities/users';
	import Logo from '$lib/shared/assets/icons/Logo.svelte';

	const user = getUserContext();
</script>

<header class="flex items-center justify-between px-4 py-6">
	{#if $user}
		<a href="/app"><Logo /></a>
	{:else}
		<a href="/"><Logo /></a>
		<slot name="auth" />
	{/if}
</header>
