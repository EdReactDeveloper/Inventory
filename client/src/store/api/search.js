import axios from 'axios';

const baseURL = '/api/search';

const body = (payload) => {
	return JSON.stringify(payload)
}

const instance = axios.create({
	headers: { 'Content-Type': 'application/json' }
});

export const getSearchResults = async (payload) => {
	const result = await axios.get(`${baseURL}/?query=${payload}`);
	return result.data;
};
