import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL
} from '../actions/types/auth';

import {GET_USER_SUCCESS,
	GET_USER_FAIL} from '../actions/types/user';

const initialState = {
	user: null,
	loading: true,
	loggedIn: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {

		case LOGIN_SUCCESS:
		case GET_USER_SUCCESS:
			return { ...state, loading: false, user: payload, loggedIn: true };

		case REGISTER_SUCCESS:
			return { ...state, loading: false };

		case REGISTER_FAIL:
		case GET_USER_FAIL:
		case LOGIN_FAIL:
		case LOGOUT_FAIL:
		case LOGOUT_SUCCESS:
			return { ...state, loading: false, user: null, loggedIn: false, message: payload };
			
		default:
			return state;
	}
};

export default reducer;
