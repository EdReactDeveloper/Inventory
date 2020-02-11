import { GET_QUERY_SUCCESS, GET_QUERY_FAIL, GET_QUERY_LOADING } from './types/search';
import { getSearchResults } from '../api/search';

export const getSearchAction = (query) => async (dispatch) => {
	dispatch({ type: GET_QUERY_LOADING });
	try {
		const result = await getSearchResults(query);
		dispatch({
			type: GET_QUERY_SUCCESS,
			payload: result
		});
	} catch (error) {
		dispatch({
			type: GET_QUERY_FAIL,
			payload: error
		});
	}
};
