import { FORM, FORM_CLOSE } from '../actions/types';

const initialState = {
	formType: null,
	instance: null,
	data: null
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case FORM:
			return { ...state, ...payload };
		case FORM_CLOSE: return {initialState}
		default:
			return state;
	}
};

export default reducer;
