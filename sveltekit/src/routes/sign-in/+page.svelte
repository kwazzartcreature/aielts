<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	import { getUserContext } from '$lib/entities/users';
	import Button from '$lib/shared/ui/Button.svelte';
	import Input from '$lib/shared/ui/Input.svelte';

	import Google from '$lib/shared/assets/icons/Google.svelte';
	import Profile from '$lib/shared/assets/icons/UserProfile.svelte';
	import Eye from '$lib/shared/assets/icons/EyeOpen.svelte';

	import HeaderLayout from '../HeaderLayout.svelte';
	import { userSchema } from '$lib/shared/api/schemas';

	export let form;

	let identifier = '';
	let password = '';

	const user = getUserContext();
</script>

<HeaderLayout />

<h1 class="text-h2 p-6 text-center font-semibold">Welcome back!</h1>

{#if form?.error}
	<p class="text-sm text-red-500">{form.error.message}</p>
{/if}

<div class="w-full px-6 py-4">
	<Button className="w-full" variant="outline" size="medium">
		<span><Google /></span>
		<span class="font-semibold">Log in with google</span>
	</Button>
</div>

<form
	use:enhance={() => {
		return async ({ result, update }) => {
			await update();
			if (result.type === 'success') {
				user.set(userSchema.parse(result.data));
				goto('/app');
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
			bind:value={identifier}
			name="identifier"
			required
			type="text"
			placeholder="Username or email"
			error={Boolean(form?.error)}
		>
			<svelte:fragment slot="icon" let:fill>
				<Profile {fill} />
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
		<Button className="w-full" variant="solid">Log in with password</Button>
	</div>

	<p class="mb-12 text-center underline"><a href="/">Forgot password?</a></p>

	<p class="text-center">
		<a href="/sign-up">
			Don’t have an account? <span class="ml-1 font-semibold underline">Sign up</span>
		</a>
	</p>
</form>
