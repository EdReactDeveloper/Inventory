import axios from 'axios';

const baseURL = '/api/profile';

const body = (payload) => {
	return JSON.stringify(payload)
}

const instance = axios.create({
	headers: { 'Content-Type': 'application/json' }
});

export const getProfileApi  = async () => {
	const result = await axios.get(`${baseURL}/me`);
	return result.data;
};

export const updateProfileApi = async(payload)=>{
  const result = await instance.post(`${baseURL}/${payload._id}`, body(payload));
	return result.data;
}

