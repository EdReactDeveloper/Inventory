import axios from 'axios';

const baseURL = '/api/auth/'
const instance = axios.create({
		headers: {
			'Content-Type': 'application/json'
    }
})


const auth = async (type, payload) => {
	const body = JSON.stringify(payload);
	const result = await instance.post(`${baseURL}${type}`, body);
	return result.data;
};

export default auth