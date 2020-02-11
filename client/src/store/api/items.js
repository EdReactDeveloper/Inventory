import axios from 'axios';

const baseURL = '/api/item';

const body = (payload) => {
	return JSON.stringify(payload)
}

const instance = axios.create({
	headers: { 'Content-Type': 'application/json' }
});

// GET ITEM
export const getItemsApi = async (id) => {
	const result = await axios.get(`${baseURL}/${id}`);
	return result.data;
};

// ADD ITEM
export const addItemApi  = async (payload) => {
	const result = await instance.post(`${baseURL}/add`, body(payload));
	return result.data;
};	

// UPDATE ITEM
export const updateItemApi  = async (payload) => {
	const result = await instance.post(`${baseURL}/edit`, body(payload));
	return result.data;
};

// UPLOAD IMG
export const uploadImgApi  = async (payload) => {
	const {img, id} = payload
	const result = await instance.post(`${baseURL}/upload/${id}`, body({img}));
	return result.data;
};	

// REMOVE ITEM
export const removeItemApi  = async (payload) =>{
	let result = null
	const {deleteAll, id} = payload
	if(deleteAll){ // remove all linked docs
		result = await axios.delete(`${baseURL}/all/${id}`)
	}else{ // remove item and lvl up linked docs
		result = await axios.delete(`${baseURL}/${id}`)
	}
	return result.data
}

// MOVE SELECTED DOCS
export const moveSelectedItemsApi = async (payload) => {
	const result = await instance.post(`${baseURL}/move`, body(payload))
	return result.data
}