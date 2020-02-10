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

export const fileUploadApi = async ({formData, id, setUploadPersentage}) => {
	const result = await fileInstance.post(`${baseURL}/${id}`, formData, {
		onUploadProgress: (ProgressEvent) => {
			setUploadPersentage(parseInt(Math.round(ProgressEvent.loaded * 100 / ProgressEvent.total)));
			setTimeout(() => setUploadPersentage(0), 3000);
		}
	});
	return result.data;
};

export const removeFileApi = async (payload) => {
	const result = await instance.post(`${baseURL}/delete/${payload.id}`, body(payload))
	return result.data
}