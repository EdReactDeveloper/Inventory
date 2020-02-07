import axios from 'axios';

const baseURL = '/api/upload';

const body = (payload) => {
	return JSON.stringify(payload);
};

const instance = axios.create({
	headers: { 'Content-Type': 'multipart/form-data' }
});

export const fileUploadApi = async (payload, setUploadPersentage) => {
	const result = await instance.post(`${baseURL}`, payload, {
		onUploadProgress: (ProgressEvent) => {
			setUploadPersentage(parseInt(Math.round(ProgressEvent.loaded * 100 / ProgressEvent.total)));
			setTimeout(() => setUploadPersentage(0), 3000);
		}
	});
	return result.data;
};
