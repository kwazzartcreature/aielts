<script lang="ts">
	import { createUserContext } from '$lib/entities/users';

	import '../app/app.css';

	export let data;
	createUserContext(data.user);
</script>

<slot />
