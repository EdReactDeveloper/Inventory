import axios from 'axios';

const baseURL = '/api/bread';

const body = (payload) => {
	return JSON.stringify(payload)
}

const instance = axios.create({
	headers: { 'Content-Type': 'application/json' }
});


export const getBreadCrumbsApi = async(payload)=>{
	const result = await axios.get(`${baseURL}/?query=${payload}`)
	return result.data
}