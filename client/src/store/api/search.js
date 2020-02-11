import axios from 'axios';

const baseURL = '/api/search';

export const getSearchResults = async (query) => {
	const result = await axios.get(`${baseURL}/?query=${query}`);
	return result.data;
};
