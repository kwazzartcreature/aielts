import { adminPB } from '$lib/shared/api/config.js';
import { error } from '@sveltejs/kit';

export const prerender = true;
export async function entries({ params }: { params: { part: string; themeSlug: string } }) {
	const { part, themeSlug } = params;
	const theme = await adminPB.collection('theme').getFirstListItem(`slug="${themeSlug}"`);
	const tasks = await adminPB
		.collection('task')
		.getFullList({ filter: `part="${part}" && section="speaking" && theme="${theme.id}"` });
	return tasks.map((task) => ({ taskSlug: task.slug }));
}

export async function load({ params }) {
	const { part, themeSlug, taskSlug } = params;
	const theme = await adminPB.collection('theme').getFirstListItem(`slug="${themeSlug}"`);
	const task = await adminPB
		.collection('task')
		.getFirstListItem(
			`part="${part}" && slug="${taskSlug}" && theme="${theme.id}" && section="speaking"`
		);

	if (!task) return error(404, { message: 'Task not found' });

	return {
		task
	};
}
