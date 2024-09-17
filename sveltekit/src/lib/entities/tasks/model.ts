import { getContext, setContext } from 'svelte';
import { derived, writable, type Readable, type Writable } from 'svelte/store';

// Task Index
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

// Task visible
export const createTaskVisibleContext = () => {
	const taskVisible = writable(false);
	setContext('taskVisible', taskVisible);
	return taskVisible;
};

export const getTaskVisibleContext = () => {
	return getContext<Writable<boolean>>('taskVisible');
};
