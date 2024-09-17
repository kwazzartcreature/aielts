const stopRecordingAndProcessLogic = (mediaRecorder: MediaRecorder | null) => {
	if (mediaRecorder && mediaRecorder.state === 'recording') mediaRecorder.stop();
};

export const submitTask = (mediaRecorder: MediaRecorder | null) => {
	stopRecordingAndProcessLogic(mediaRecorder);
};

export const submitAttempt = async (attemptId: string, mediaRecorder: MediaRecorder | null) => {
	const res = await fetch(`/api/attempts/${attemptId}`, {
		method: 'PUT',
		body: JSON.stringify({
			step: 'endAnswering'
		})
	});

	if (!res.ok) {
		console.error(await res.text());
		return;
	}

	stopRecordingAndProcessLogic(mediaRecorder);
	window.location.reload();
};
