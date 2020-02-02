import {
	ADD_PROFILE,
	ADD_PROFILE_SUCCESS,
	ADD_PROFILE_FAIL,
	GET_PROFILE,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_FAIL,
	UPDATE_PROFILE,
	UPDATE_PROFILE_SUCCESS,
	UPDATE_PROFILE_FAIL,
	CLEAN_UP
} from '../actions/types';

const initialState = {
	profile: {},
	profileLoading: true,
	profileUpdating: false,
	error: null
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_PROFILE:
		case ADD_PROFILE: {
			return {
				...state,
				profileLoading: true
			};
		}

		case UPDATE_PROFILE: {
			return {
				...state,
				profileUpdating: true
			};
		}

		case GET_PROFILE_SUCCESS:
		case UPDATE_PROFILE_SUCCESS:
		case ADD_PROFILE_SUCCESS: {
			return {
				...state,
				profile: payload,
				profileLoading: false,
				profileUpdating: false
			};
		}

		case GET_PROFILE_FAIL:
		case UPDATE_PROFILE_FAIL:
		case ADD_PROFILE_FAIL: {
			return {
				...state,
				error: payload,
				profileLoading: false
			};
		}

		case CLEAN_UP: {
			return initialState;
		}
		default:
			return state;
	}
};

export default reducer;
