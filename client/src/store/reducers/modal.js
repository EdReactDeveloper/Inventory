import { MODAL, EDIT } from '../actions/types';

const initialState = {
	isOpen: false,
	form:{
		pageId: null,
		parentId: null,
		formType: '',

	}
};	



const reducer =  (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case MODAL:
			return { ...state, isOpen: !state.isOpen, form: payload};
	
		case EDIT:
			return { ...state, editMode: !state.editMode };

		default:
			return state;
	}
};

export default reducer;
