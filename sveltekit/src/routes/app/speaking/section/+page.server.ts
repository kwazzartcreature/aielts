import { adminPB } from '$lib/shared/api/config';

export async function load() {
	const arr1 = await adminPB
		.collection('task')
		.getFullList({ filter: `section="speaking" && part=1` });
	const task1 = arr1[Math.floor(Math.random() * arr1.length)];

	const arr2 = await adminPB
		.collection('task')
		.getFullList({ filter: `section="speaking" && part=2` });
	const task2 = arr2[Math.floor(Math.random() * arr2.length)];

	const arr3 = await adminPB
		.collection('task')
		.getFullList({ filter: `section="speaking" && part=3 && theme="${task2.theme}"` });
	const task3 = arr3[Math.floor(Math.random() * arr3.length)];

	return {
		taskIds: [task1.id, task2.id, task3.id]
	};
}
