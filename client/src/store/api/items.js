import axios from 'axios';

const baseURL = '/api/item';

const body = (payload) => {
	return JSON.stringify(payload)
}

const instance = axios.create({
	headers: { 'Content-Type': 'application/json' }
});

// ITEM
export const getItemsApi = async (id) => {
	const result = await axios.get(`${baseURL}/${id}`);
	return result.data;
};

export const addItemApi  = async (payload) => {
	const result = await instance.post(`${baseURL}/add`, body(payload));
	return result.data;
};	

export const updateItemApi  = async (payload) => {
	const result = await instance.post(`${baseURL}/edit`, body(payload));
	return result.data;
};	

export const removeItemApi  = async (id) =>{
	const result = await axios.delete(`${baseURL}/${id}`)
	return result.data
}

export const moveSelectedItemsApi = async (payload) => {
	const result = await instance.post(`${baseURL}/move`, body(payload))
	return result.data
}