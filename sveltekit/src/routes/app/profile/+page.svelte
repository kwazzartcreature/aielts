<script lang="ts">
	import { SignOut } from '$lib/features/auth';
	import { getUserContext } from '$lib/entities/users';

	const user = getUserContext();
</script>

<pre>{JSON.stringify($user, null, 2)}</pre>

<a href="/app/attempts">Attempts</a>

<SignOut />
