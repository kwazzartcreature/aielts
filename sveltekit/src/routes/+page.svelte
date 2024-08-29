<script lang="ts">
	import Button from '$lib/shared/ui/Button.svelte';
	import { getUserContext } from '$lib/entities/users';
	import Logo from '$lib/shared/assets/icons/logo.svg';
	import Google from '$lib/shared/assets/icons/google.svg';

	const user = getUserContext();
</script>

<header class="flex justify-between items-center px-4 py-6">
	<a href="/"><img src={Logo} alt="brand logo" /></a>
	<Button variant="outline" size="small">Log In</Button>
</header>

{#if $user}
	<h1>Page {$user.name || '<NO NAME>'}</h1>
{:else}
	<h1>Page Anon</h1>
{/if}
