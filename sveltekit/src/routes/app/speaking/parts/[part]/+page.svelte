<script lang="ts">
	import { page } from '$app/stores';
	import { themeSchema } from '$lib/shared/api/schemas.js';

	export let data;

	const themes = data?.themes!.map((theme: unknown) => themeSchema.parse(theme));
	const part = $page.params.part;
</script>

<h1>Part {part}</h1>
<ul class="space-y-4">
	{#each themes as theme (theme.id)}
		<li>
			<a href={`/app/speaking/parts/${part}/themes/${theme.slug}/tasks`}>{theme.name}</a>
			{#if theme.image}
				<img class="w-18 aspect-square" src={theme.image} alt={theme.name} />
			{/if}
		</li>
	{/each}
</ul>
