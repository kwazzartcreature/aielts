<script lang="ts">
	import { enhance } from '$app/forms';
	import Logo from '$lib/shared/assets/icons/Logo.svelte';

	export let form;

	let username = '';
	let email = '';
	let password = '';
</script>

<header class="flex items-center justify-between px-4 py-6">
	<a href="/"><Logo /></a>
	<button class="border">Log In</button>
</header>

<form use:enhance method="POST" class="mx-auto flex max-w-[300px] flex-col space-y-2">
	<h1 class="text-center text-xl font-semibold">Create new account</h1>
	{#if form?.error}
		<p class="text-sm text-red-500">{form.error.message}</p>
	{/if}
	<input
		bind:value={username}
		class="border"
		name="username"
		required
		type="text"
		placeholder="username*:"
	/>
	<input
		bind:value={email}
		class="border"
		name="email"
		required
		type="email"
		placeholder="email*:"
	/>
	<input
		bind:value={password}
		class="border"
		name="password"
		required
		type="password"
		placeholder="password*:"
	/>
	<button class="border">submit</button>
</form>
