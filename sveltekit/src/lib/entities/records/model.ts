import { getContext, onMount, setContext } from 'svelte';
import { derived, writable, type Writable, type Readable } from 'svelte/store';

// QuestionOffsetsContext
interface QuestionOffsetsContext {
	questionOffsets: Readable<number[] | null>;
	add: (offset: number) => void;
	reset: () => void;
}
export const createQuestionOffsetsContext = () => {
	const questionOffsets = writable([0]);

	const questionOffsetsContext: QuestionOffsetsContext = {
		questionOffsets: derived(questionOffsets, (offsets) => offsets),
		add: (offset) => {
			questionOffsets.update((offsets) => {
				offsets = [...offsets, offset];
				return offsets;
			});
		},
		reset: () => {
			questionOffsets.set([0]);
		}
	};

	setContext('questionOffsets', questionOffsetsContext);
	return questionOffsetsContext;
};

export const getQuestionOffsetsContext = () => {
	return getContext<QuestionOffsetsContext>('questionOffsets');
};

// RecordingTimeSecondsContext
interface RecordingTimeSecondsContext {
	recordingTimeSeconds: Readable<number>;
	reset: () => void;
	startTimer: () => void;
}
export const createRecordingTimeSecondsContext = () => {
	const recordingTimeSeconds = writable(0);

	let interval: NodeJS.Timeout | null = null;
	onMount(() => {
		return () => {
			if (interval) clearInterval(interval);
		};
	});

	const recordingTimeSecondsContext: RecordingTimeSecondsContext = {
		recordingTimeSeconds: derived(recordingTimeSeconds, (time) => time),
		reset: () => {
			if (interval) clearInterval(interval);
			recordingTimeSeconds.set(0);
		},
		startTimer: () => {
			if (interval) clearInterval(interval);
			interval = setInterval(() => {
				recordingTimeSeconds.update((time) => time + 1);
			}, 1000);
		}
	};

	setContext('recordingTimeSeconds', recordingTimeSecondsContext);
	return recordingTimeSecondsContext;
};

export const getRecordingTimeSecondsContext = () => {
	return getContext<RecordingTimeSecondsContext>('recordingTimeSeconds');
};

// Recording state
export const createRecordingContext = () => {
	const recording = writable(false);
	setContext('recording', recording);
	return recording;
};

export const getRecordingContext = () => {
	return getContext<Writable<boolean>>('recording');
};

// Recorder state
interface RecorderContext {
	mediaRecorder: Writable<MediaRecorder | null>;
	audioChunks: Writable<Blob[]>;
	audioBlob: Writable<Blob>;
}

export const createRecorderContext = () => {
	const mediaRecorder = writable<MediaRecorder | null>(null);
	const audioChunks = writable<Blob[]>([]);
	const audioBlob = writable<Blob>(new Blob([]));
	const recorderContext: RecorderContext = {
		mediaRecorder,
		audioChunks,
		audioBlob
	};
	setContext('recorder', recorderContext);
	return recorderContext;
};

export const getRecorderContext = () => {
	return getContext<RecorderContext>('recorder');
};
