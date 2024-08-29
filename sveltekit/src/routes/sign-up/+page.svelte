<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;

	let username = '';
	let email = '';
	let password = '';
</script>

<form use:enhance method="POST" class="flex flex-col space-y-2 max-w-[300px] mx-auto">
	<h1 class="text-xl text-center font-semibold">Create new account</h1>
	{#if form?.error}
		<p class="text-red-500 text-sm">{form.error.message}</p>
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
