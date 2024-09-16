import { getContext, setContext } from 'svelte';
import { derived, writable, type Readable } from 'svelte/store';

interface TaskIndexContext {
	taskIndex: Readable<number>;
	increment: () => void;
	reset: () => void;
}

export const createTaskIndexContext = () => {
	const taskIndex = writable(0);

	const taskIndexContext: TaskIndexContext = {
		taskIndex: derived(taskIndex, (index) => index),
		increment: () => {
			taskIndex.update((index) => index + 1);
		},
		reset: () => {
			taskIndex.set(0);
		}
	};

	setContext('taskIndex', taskIndexContext);
	return taskIndexContext;
};

export const getTaskIndexContext = () => {
	return getContext<TaskIndexContext>('taskIndex');
};
