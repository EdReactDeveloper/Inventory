import axios from 'axios';

const baseURL = '/api/items';

const body = (payload) => {
	return JSON.stringify(payload)
}

const instance = axios.create({
	headers: { 'Content-Type': 'application/json' }
});

// ITEM
export const getItemApi = async (id) => {
	const result = await axios.get(`${baseURL}/${id}`);
	return result.data;
};

export const getAllItemsApi  = async () => {
	const result = await axios.get(`${baseURL}/`);
	return result.data;
};

export const addItemApi  = async (payload, type) => {
	const result = await instance.post(`${baseURL}/`, body(payload, type));
	return result.data;
};

export const removeItemApi  = async (id) =>{
	const result = await axios.delete(`${baseURL}/${id}`)
	return result.data
}

