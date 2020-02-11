import { IN_PROGRESS } from './types/inprogress';

// LOADER FOR LIST ITEMS
const inProgressAction = (isFetching, id) => (dispatch) => {
	dispatch({
		type: IN_PROGRESS,
		payload: { isFetching, id }
	});
};

export default inProgressAction