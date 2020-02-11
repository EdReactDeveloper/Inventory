import { GET_USER_SUCCESS, GET_USER_FAIL } from './types/user';
import getUser from '../api/user'; 

const getUserAction = () => async (dispatch) => {
	try {
		const result = await getUser()
		dispatch({
			type: GET_USER_SUCCESS,
			payload: result
		});
	} catch (error) {
		dispatch({
			type: GET_USER_FAIL,
			payload: 'unauthorized'
		});
	}
};

export default getUserAction