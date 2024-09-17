<script lang="ts">
	import { createAttemptContext } from '$lib/entities/attempts';
	import { createUserContext } from '$lib/entities/users';

	import '../app/app.css';

	export let data;
	createUserContext(data.user);
	createAttemptContext(null);
</script>

<slot />