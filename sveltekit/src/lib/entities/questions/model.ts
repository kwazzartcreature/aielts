import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export const createQuestionIndexContext = () => {
	const questionIndex = writable(0);
	setContext('questionIndex', questionIndex);
	return questionIndex;
};

export const getQuestionIndexContext = () => {
	return getContext<Writable<number>>('questionIndex');
};
