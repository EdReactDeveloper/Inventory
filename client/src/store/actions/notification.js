import uuid from 'uuid';
import { SET_NOTE, REMOVE_NOTE, MOVE_NOTE } from './types/notification';

// SET NOTIFICATIONS
const setNotification = (msg, timeout = 3500) => dispatch=>{
	const id = uuid.v4()
	dispatch({
		type: SET_NOTE,
		payload: { msg, id }
	});
	// 1.remove notificatoin from the screen
  setTimeout(() => {
		dispatch({
			type: MOVE_NOTE,
			payload: id
		});
	}, 3000);	

	// 2.delete notification
	setTimeout(() => {
		dispatch({
			type: REMOVE_NOTE,
			payload: id
		});
	}, timeout);
}

export default setNotification