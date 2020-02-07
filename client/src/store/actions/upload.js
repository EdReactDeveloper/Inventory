import {UPLOADING, UPLOADING_SUCCESS, UPLOADING_FAIL} from '../actions/types'; 
import {fileUploadApi} from '../api/upload'; 
import axios from 'axios'

export const fileUploadAction = (formData, time) => async dispatch =>{
  dispatch({type: UPLOADING})
  try {
    const result = await fileUploadApi(formData, time)
    dispatch({type: UPLOADING_SUCCESS, payload: result})
  } catch (error) {
    if(error.response.status === 500){
      console.log('there was a problem with the server')
    }else{
      console.log(error.response.data.msg)
    }
    dispatch({type: UPLOADING_FAIL, payload: error})
    
  }
} 