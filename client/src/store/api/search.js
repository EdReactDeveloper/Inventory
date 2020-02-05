import axios from 'axios';

const baseURL = '/api/search';

const body = (payload) => {
	return JSON.stringify(payload)
}

const instance = axios.create({
	headers: { 'Content-Type': 'application/json' }
});

export const getSearchResults = async (query) => {
	const result = await axios.get(`${baseURL}/?query=${query}`);
	return result.data;
};
