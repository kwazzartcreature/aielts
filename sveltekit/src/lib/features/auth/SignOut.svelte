<script lang="ts">
	import { goto } from '$app/navigation';
	import { getUserContext } from '$lib/entities/users';
	import Button from '$lib/shared/ui/Button.svelte';

	const user = getUserContext();

	const signOut = async () => {
		const res = await fetch('/api/auth/sign-out', {
			method: 'POST'
		});

		if (!res.ok) {
			console.error(res.statusText);
			return;
		}

		user.set(null);
		goto('/sign-in');
	};
</script>

<Button className="bg-danger" variant="solid" size="small" on:click={signOut}>Sign Out</Button>
