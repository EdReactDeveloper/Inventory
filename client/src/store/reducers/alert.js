import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = []

const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case SET_ALERT:
			return [...state, payload]
      
		case REMOVE_ALERT:
			return state.filter((item) => item.id !== payload)
			
		default:
			return state;
	}
};

export default reducer;
