import { MODAL } from '../actions/types/modal';

const initialState = {
	isOpen: false,
	form:{
		formType: '',
	}
};	



const reducer =  (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case MODAL:
			return { ...state, isOpen: !state.isOpen, form: payload};

		default:
			return state;
	}
};

export default reducer;
