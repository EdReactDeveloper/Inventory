import {
  GET_PROFILE, 
  GET_PROFILE_SUCCESS, 
  GET_PROFILE_FAIL,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL
} from './types'; 
import {getProfileApi, updateProfileApi } from '../api/profile'; 


export const getProfileAction = () => async dispatch => {
  dispatch({type: GET_PROFILE})
  try {
    const result = await getProfileApi()
    dispatch({type: GET_PROFILE_SUCCESS, payload: result})
  } catch (error) {
    dispatch({type: GET_PROFILE_FAIL, payload: error})
  }
} 

export const updateProfileAction = (payload) => async dispatch =>{
  dispatch({type: UPDATE_PROFILE})
  try {
    const result = await updateProfileApi(payload)
    dispatch({type: UPDATE_PROFILE_SUCCESS, payload: result})
  } catch (error) {
    dispatch({type: UPDATE_PROFILE_FAIL, payload: error})
    
  }
} 
 

