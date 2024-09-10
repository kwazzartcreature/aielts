<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	import Button from '$lib/shared/ui/Button.svelte';
	import Input from '$lib/shared/ui/Input.svelte';

	import Google from '$lib/shared/assets/icons/Google.svelte';
	import Profile from '$lib/shared/assets/icons/UserProfile.svelte';
	import Email from '$lib/shared/assets/icons/Email.svelte';
	import Eye from '$lib/shared/assets/icons/EyeOpen.svelte';

	import HeaderLayout from '../HeaderLayout.svelte';
	import { getUserContext } from '$lib/entities/users';
	import { userSchema } from '$lib/shared/api/schemas';

	export let form;

	const user = getUserContext();

	let username = '';
	let email = '';
	let password = '';
</script>

<HeaderLayout />

<h1 class="text-h2 p-6 text-center font-semibold">Create an account to start practice!</h1>

{#if form?.error}
	<p class="text-sm text-red-500">{form.error.message}</p>
{/if}

<div class="w-full px-6 py-4">
	<Button className="w-full" variant="outline" size="medium">
		<span><Google /></span>
		<span class="font-semibold"> Sign up with google</span>
	</Button>
</div>

<form
	use:enhance={() => {
		return async ({ result, update }) => {
			await update();
			if (result.type === 'success') {
				user.set(userSchema.parse(result.data));
				goto('/');
			}
		};
	}}
	method="POST"
	class="mx-auto flex max-w-[300px] flex-col"
>
	<div class="mb-2 flex items-center justify-center">
		<span class="bg-whisper-100 inline-block h-[1px] w-[100px]"></span>
		<span class="relative bottom-1 mx-2">or</span>
		<span class="bg-whisper-100 inline-block h-[1px] w-[100px]"></span>
	</div>

	<div class="mb-5 space-y-2">
		<Input
			variant="solid"
			bind:value={username}
			name="username"
			required
			type="text"
			placeholder="Enter your username"
			error={Boolean(form?.error)}
		>
			<svelte:fragment slot="icon" let:fill>
				<Profile {fill} />
			</svelte:fragment>
		</Input>

		<Input
			variant="solid"
			bind:value={email}
			name="email"
			required
			type="email"
			placeholder="Enter your email"
			error={Boolean(form?.error)}
		>
			<svelte:fragment slot="icon" let:fill>
				<Email {fill} />
			</svelte:fragment>
		</Input>

		<Input
			variant="solid"
			bind:value={password}
			name="password"
			required
			type="password"
			placeholder="Set a password"
			error={Boolean(form?.error)}
		>
			<svelte:fragment slot="icon" let:fill>
				<Eye {fill} />
			</svelte:fragment>
		</Input>
	</div>

	<div class="mx-6 mb-4">
		<Button className="w-full" variant="solid">Sign up with email</Button>
	</div>

	<p class="pt-12 text-center">
		<a href="/sign-in">
			Already have an account? <span class="ml-1 font-semibold underline">Log In</span>
		</a>
	</p>
</form>
