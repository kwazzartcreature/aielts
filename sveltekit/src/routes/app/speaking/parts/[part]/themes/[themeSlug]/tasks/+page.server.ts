import { adminPB } from '$lib/shared/api/config.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function entries({ params }: { params: { part: string } }) {
	const { part } = params;
	const themes = await adminPB
		.collection('theme')
		.getFullList({ filter: `part="${part} && section="speaking"` });
	return themes.map((theme) => ({ themeSlug: theme.slug }));
}

export async function load({ params }) {
	const { part, themeSlug } = params;

	const theme = await adminPB.collection('theme').getFirstListItem(`slug="${themeSlug}"`);
	const tasks = await adminPB
		.collection('task')
		.getFullList({ filter: `part="${part}" && theme="${theme.id}" && section="speaking"` });

	if (!tasks.length) return error(404, { message: 'Tasks not found' });

	return {
		part,
		theme,
		tasks
	};
}
