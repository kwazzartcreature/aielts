<script lang="ts">
	import { getUserContext } from '$lib/entities/users';
	import Logo from '$lib/shared/assets/icons/logo.svg';

	const user = getUserContext();
</script>

<header class="flex justify-between items-center px-4 py-6">
	<a href="/"><img src={Logo} alt="brand logo" /></a>
	<button class="border">Log In</button>
</header>

{#if $user}
	<h1>Page {$user.name || '<NO NAME>'}</h1>
{:else}
	<h1>Page Anon</h1>
{/if}
