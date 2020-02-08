import axios from 'axios';

const baseURL = '/api/upload';

const body = (payload) => {
	return JSON.stringify(payload);
};

const fileInstance = axios.create({
	headers: { 'Content-Type': 'multipart/form-data' }
});

const instance = axios.create({
	headers: { 'Content-Type': 'application/json' }
});

export const fileUploadApi = async (payload, setUploadPersentage) => {
	const result = await fileInstance.post(`${baseURL}`, payload, {
		onUploadProgress: (ProgressEvent) => {
			setUploadPersentage(parseInt(Math.round(ProgressEvent.loaded * 100 / ProgressEvent.total)));
			setTimeout(() => setUploadPersentage(0), 3000);
		}
	});
	return result.data;
};

export const removeFileApi = async (payload) => {
	const path = {path: payload}
	const result = await instance.post(`${baseURL}/delete`, body(path))
	return result.data
}