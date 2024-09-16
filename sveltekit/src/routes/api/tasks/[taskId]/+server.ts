import { adminPB } from '$lib/shared/api/config.js';
import { taskSchema } from '$lib/shared/api/schemas.js';
import { error } from '@sveltejs/kit';

export const GET = async ({ params }) => {
	try {
		const task = taskSchema.parse(await adminPB.collection('task').getOne(params.taskId));
		const questionPromises = task.questions!.map((questionId: string) => {
			return adminPB.collection('question').getOne(questionId, { requestKey: questionId });
		});
		const questions = await Promise.all(questionPromises!);
		task.questions = questions
			.sort((a, b) => a.order - b.order)
			.map((question) => question.content);

		return new Response(JSON.stringify(task), { status: 200 });
	} catch (err) {
		console.error(err);
		return error(500, 'Internal Server Error :3');
	}
};
