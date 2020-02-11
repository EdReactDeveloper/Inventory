import { DROPDOWN } from '../actions/types/dropdown';

const initialState = {
	isOpen: false
};

const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case DROPDOWN:
      return { ...state, isOpen: payload };
    default: return state
	}
}

export default reducer
