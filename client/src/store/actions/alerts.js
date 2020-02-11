import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types/alers';

// SET ALERT
const setAlert = (msg, status, timeout = 2500) => (dispatch) => {
	const id = uuid.v4();
	dispatch({
		type: SET_ALERT,
		payload: { msg, status, id }
	});
	// 1.remove alert after timeout
	setTimeout(() => {
		dispatch({
			type: REMOVE_ALERT,
			payload: id
		});
	}, timeout);
};

export default setAlert