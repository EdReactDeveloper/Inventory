import { GET_BREADCRUMBS, GET_BREADCRUMBS_SUCCESS, GET_BREADCRUMBS_FAIL } from '../actions/types';

const initialState = {
	isLoading: false,
	data: {},
	error: null
};

const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case GET_BREADCRUMBS:
			return { ...state, isLoading: true };

		case GET_BREADCRUMBS_SUCCESS:
			return { ...state, data: payload, isLoading: false };

		case GET_BREADCRUMBS_FAIL:
			return { ...state, isLoading: false, error: payload };
		default:
			return state;
	}
};

export default reducer;
