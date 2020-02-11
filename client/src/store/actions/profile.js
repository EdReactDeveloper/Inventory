import {
	REMOVE_PROFILE_FAIL,
	ADD_PROFILE,
	ADD_PROFILE_SUCCESS,
	ADD_PROFILE_FAIL,
	GET_PROFILE,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_FAIL,
	UPDATE_PROFILE,
	UPDATE_PROFILE_SUCCESS,
	UPDATE_PROFILE_FAIL,
} from './types/profile';
import {CLEAN_UP} from './types/utils'; 

import { getProfileApi, updateProfileApi, addProfileApi, removeProfileApi } from '../api/profile';

// GET PROFILE
export const getProfileAction = () => async (dispatch) => {
	dispatch({ type: GET_PROFILE });
	try {
		const result = await getProfileApi();
		dispatch({ type: GET_PROFILE_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: GET_PROFILE_FAIL, payload: error });
	}
};

// CREATE PROFILE
export const addProfileAction = ({state, history}) => async (dispatch) => {
	dispatch({ type: ADD_PROFILE });
	try {
		const result = await addProfileApi(state);
		dispatch({ type: ADD_PROFILE_SUCCESS, payload: result });
		history.push(`/${result._id}`)
	} catch (error) {
		dispatch({ type: ADD_PROFILE_FAIL });
	}
};

// UPDATE PROFILE
export const updateProfileAction = (payload) => async (dispatch) => {
	dispatch({ type: UPDATE_PROFILE });
	try {
		const result = await updateProfileApi(payload);
		dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: UPDATE_PROFILE_FAIL, payload: error });
	}
};

// CLEAR UP PROFILE DATA ON UNMOUNT
export const componentUnmount = () => (dispatch) => {
	dispatch({ type: CLEAN_UP });
};

// REMOVE PROFILE
export const removeProfileAction = ({id, history}) => async (dispatch) => {
	dispatch({ type: ADD_PROFILE });
	try {
		const result = await removeProfileApi(id);
		dispatch({ type: GET_PROFILE_SUCCESS, payload: result });
		if(result){
			history.push('/');
		}else{
			history.push(`/${id}`)
		}
	} catch (error) {
		dispatch({ type: REMOVE_PROFILE_FAIL, payload: error });
	}
};


