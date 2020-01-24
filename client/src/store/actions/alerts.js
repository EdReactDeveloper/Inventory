import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

const setAlert = (msg, status, timeout = 2500) => (dispatch) => {
	const id = uuid.v4();
	dispatch({
		type: SET_ALERT,
		payload: { msg, status, id }
	});
	setTimeout(() => {
		dispatch({
			type: REMOVE_ALERT,
			payload: id
		});
	}, timeout);
};

export default setAlert