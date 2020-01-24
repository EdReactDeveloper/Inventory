import { GET_QUERY_SUCCESS, GET_QUERY_FAIL, GET_QUERY_LOADING } from '../actions/types';

const initialState = {
	data: [],
	loading: true
};

const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
    
		case GET_QUERY_LOADING:
      return { ...state, loading: true };
      
		case GET_QUERY_SUCCESS:
			return { ...state, data: payload, loading: false };

		case GET_QUERY_FAIL:
			return {
				loading: false,
				message: payload
			};

		default:
			return state;
	}
};

export default reducer;
