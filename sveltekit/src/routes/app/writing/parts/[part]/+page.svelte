<script lang="ts">
	import { page } from '$app/stores';
	import { themeSchema } from '$lib/shared/api/schemas';

	export let data;

	const themes = data?.themes!.map((theme: unknown) => themeSchema.parse(theme));
	const part = $page.params.part;
</script>

<h1>Part {$page.params.part}</h1>

{#if themes.length > 0}
	<ul>
		{#each data.themes as theme (theme.id)}
			<li><a href={`/app/speaking/parts/${part}/themes/${theme.slug}`}>{theme.name}</a></li>
		{/each}
	</ul>
{:else}
	<h2>No themes :[</h2>
{/if}
