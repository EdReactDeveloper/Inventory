import {
  GET_BREADCRUMBS,
  GET_BREADCRUMBS_SUCCESS,
  GET_BREADCRUMBS_FAIL
} from './types'; 
import {getBreadCrumbsApi} from '../api/bread';

export const getBreadCrumbsAction = (payload) => async dispatch=>{
  dispatch({type: GET_BREADCRUMBS})
  try {
      const result = await getBreadCrumbsApi(payload); 
      dispatch({type: GET_BREADCRUMBS_SUCCESS, payload: result})
  } catch (error) {
    dispatch({type: GET_BREADCRUMBS_FAIL, payload: error})
  }
}