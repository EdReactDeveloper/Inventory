import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL
} from './types';
import auth from '../api/auth';
import setAlert from './alerts'; 

export const loginAction = ({email, password}) => async (dispatch) => {
	try {
		const result = await auth('login', { email, password });
		dispatch({ type: LOGIN_SUCCESS, payload: result });
	} catch (error) {
		const {errors} = error.response.data
		if(errors){
			errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
		}
		dispatch({ type: LOGIN_FAIL, payload: error });
	}
};

export const register = ({email, password, history}) => async (dispatch) => {
	try {
		const result = await auth('register', { email, password });
		dispatch({ type: REGISTER_SUCCESS, payload: result });
		history.push('/login');
	} catch (error) {
		const {errors} = error.response.data
		if(errors){
			errors.forEach(err=> dispatch(setAlert(err.msg, 'danger')))
		}
		dispatch({ type: REGISTER_FAIL, payload: error });
	}
};

export const logout = () => async (dispatch) => {
	try {
		await auth('logout');
		dispatch({ type: LOGOUT_SUCCESS });
	} catch (error) {
		dispatch({ type: LOGOUT_FAIL, paylaod: error });
	}
};
