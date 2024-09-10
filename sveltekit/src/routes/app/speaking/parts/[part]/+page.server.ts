import { adminPB } from '$lib/shared/api/config.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

const allowedParts = ['1', '2', '3'];

export async function entries() {
	return allowedParts.map((part) => ({ part }));
}

export async function load({ params }) {
	const { part } = params;

	if (!allowedParts.includes(part)) return error(404, { message: 'Not found' });

	const tasks = await adminPB
		.collection('task')
		.getFullList({ filter: `part="${part}" && section="speaking"` });
	const themeIds = Array.from(new Set(tasks.map((task) => task.theme)));
	const themes = await Promise.all(themeIds.map((id) => adminPB.collection('theme').getOne(id)));
	themes.forEach(
		(theme) => (theme.image = adminPB.files.getUrl(theme, theme.image, { thumb: '0x0' }))
	);
	return {
		themes
	};
}
