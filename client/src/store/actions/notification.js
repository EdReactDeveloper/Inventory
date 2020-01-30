import uuid from 'uuid';
import { SET_NOTE, REMOVE_NOTE, MOVE_NOTE } from './types';

const setNotification = (msg, timeout = 3500) => dispatch=>{
	const id = uuid.v4()
	dispatch({
		type: SET_NOTE,
		payload: { msg, id }
  });
  setTimeout(() => {
		dispatch({
			type: MOVE_NOTE,
			payload: id
		});
	}, 3000);	
	setTimeout(() => {
		dispatch({
			type: REMOVE_NOTE,
			payload: id
		});
	}, timeout);
}

export default setNotification