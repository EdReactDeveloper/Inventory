import { FORM } from '../actions/types';

const initialState = {
	editMode: false,
	form:{
		formType: '',
	}
};	



const reducer =  (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case FORM:
			return { ...state, editMode: !state.editMode, form: payload};

		default:
			return state;
	}
};

export default reducer;
