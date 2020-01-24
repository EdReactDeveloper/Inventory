import { GET_QUERY_SUCCESS, GET_QUERY_FAIL, GET_QUERY_LOADING } from './types';
import { getSearchResults } from '../api/search';

export const getSearchAction = (payload) => async (dispatch) => {
	dispatch({ type: GET_QUERY_LOADING });
	try {
		const result = await getSearchResults(payload);
		dispatch({
			type: GET_QUERY_SUCCESS,
			payload: result
		});
	} catch (error) {
		dispatch({
			type: GET_QUERY_FAIL
		});
	}
};
