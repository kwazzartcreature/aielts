<script lang="ts">
	import Button from '$lib/shared/ui/Button.svelte';
	import Input from '$lib/shared/ui/Input.svelte';
	import { getUserContext } from '$lib/entities/users';
	import UserProfile from '$lib/shared/assets/icons/UserProfile.svelte';
	import Logo from '$lib/shared/assets/icons/Logo.svelte';

	const user = getUserContext();
</script>

<header class="flex justify-between items-center px-4 py-6">
	<Logo />
	<Button variant="outline" size="small">Log In</Button>
</header>

{#if $user}
	<h1>Page {$user.name || '<NO NAME>'}</h1>
{:else}
	<h1>Page Anon</h1>
{/if}

<div class="space-y-2">
	<Input variant="solid" placeholder="lol" name="name">
		<svelte:fragment slot="icon" let:fill>
			<UserProfile {fill} />
		</svelte:fragment>
	</Input>
	<Input variant="outline" placeholder="lol" name="name">
		<svelte:fragment slot="icon" let:fill>
			<UserProfile {fill} />
		</svelte:fragment>
	</Input>
	<Input error variant="solid" placeholder="lol" name="name">
		<svelte:fragment slot="icon" let:fill>
			<UserProfile {fill} />
		</svelte:fragment>
	</Input>
	<Input error variant="outline" placeholder="lol" name="name">
		<svelte:fragment slot="icon" let:fill>
			<UserProfile {fill} />
		</svelte:fragment>
	</Input>
</div>
