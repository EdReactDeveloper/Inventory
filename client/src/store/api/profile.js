import axios from 'axios';

const baseURL = '/api/profile';

const body = (payload) => {
	return JSON.stringify(payload)
}

const instance = axios.create({
	headers: { 'Content-Type': 'application/json' }
});

// GET 
export const getProfileApi  = async () => {
	const result = await axios.get(`${baseURL}/me`);
	return result.data;
};

// UPDATE 
export const updateProfileApi = async(payload)=>{
  const result = await instance.post(`${baseURL}/${payload._id}`, body(payload));
	return result.data;
}

// ADD
export const addProfileApi = async (payload) => {
	const result = await instance.post(`${baseURL}/add`, body(payload));
	return result.data
}

// REOMVE
export const removeProfileApi = async (id)=> {
	const result = await instance.delete(`${baseURL}/${id}`, body(id))
	return result.data
}
