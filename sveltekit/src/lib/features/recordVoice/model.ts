import { get, type Writable } from 'svelte/store';

const sendAudioData = async (
	attemptId: string,
	taskId: string,
	section: 'speaking' | 'writing',
	audioBlob: Writable<Blob>
) => {
	console.log('SENDING DATA');
	const formData = new FormData();
	formData.append('audio', get(audioBlob));
	formData.append('section', section);
	formData.append('attemptId', attemptId);
	formData.append('taskId', taskId);

	formData.append('questionOffsetsString', localStorage.getItem('questionOffsets')!);
	localStorage.removeItem('questionOffsets');

	try {
		const res = await fetch(`/api/records`, {
			method: 'POST',
			body: formData
		});

		if (!res.ok) console.error(await res.text());
		else console.log('Audio uploaded successfully!');
	} catch (error) {
		console.error('Failed to upload audio:', error);
	}
};

export const startRecording = async (
	attemptId: string,
	taskId: string,
	section: 'speaking' | 'writing',
	mediaRecorder: Writable<MediaRecorder | null>,
	audioChunks: Writable<Blob[]>,
	audioBlob: Writable<Blob>,
	recording: Writable<boolean>,
	taskVisible: Writable<boolean>,
	questionIndex: Writable<number>,
	resetQuestionOffsets: () => void,
	resetRecordingTime: () => void,
	incrementTaskIndex: () => void,
	startTimer: () => void
) => {
	const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

	const recorder = new MediaRecorder(stream);
	recorder.ondataavailable = (event) => {
		audioChunks.update((chunks) => [...chunks, event.data]);
	};

	recorder.onstop = async () => {
		console.log('STOPPING');
		audioBlob.set(new Blob(get(audioChunks), { type: 'audio/wav' }));
		await sendAudioData(attemptId, taskId, section, audioBlob);

		questionIndex.set(0);
		recording.set(false);
		taskVisible.set(false);
		resetQuestionOffsets();
		resetRecordingTime();
		incrementTaskIndex();
		audioChunks.set([]);
	};

	mediaRecorder.set(recorder);

	recorder.start();

	recording.set(true);
	taskVisible.set(true);
	startTimer();
};
