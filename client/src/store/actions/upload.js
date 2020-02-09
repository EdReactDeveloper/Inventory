import {UPLOADING, UPLOADING_SUCCESS, UPLOADING_FAIL, REMOVE_FILE_SUCCESS, REMOVE_FILE_FAIL, UPDATE_ITEM_SUCCESS} from './types'; 
import {fileUploadApi, removeFileApi} from '../api/upload'; 
import {uploadImgApi} from '../api/items'; 

export const fileUploadAction = ({formData, time, id}) => async dispatch =>{
  dispatch({type: UPLOADING})
  try {
    const result = await fileUploadApi(formData, time)
    const {filePath} = result
    if(filePath){
      const item = await uploadImgApi({img: filePath, id})
      dispatch({type: UPLOADING_SUCCESS, payload: result})
      dispatch({type: UPDATE_ITEM_SUCCESS, payload: item})
    }
    
  } catch (error) {
    if(error.response.status === 500){
      console.log('there was a problem with the server')
    }else{
      console.log(error.response.data.msg)
    }
    dispatch({type: UPLOADING_FAIL, payload: error})
    
  }
} 

export const removeFileAction = (file) => async dispatch =>{
  dispatch({type: UPLOADING})
  try {
    const result = await removeFileApi(file)
    dispatch({type: REMOVE_FILE_SUCCESS, payload: result})
  } catch (error) {
    if(error.response.status === 500){
      console.log('there was a problem with the server')
    }else{
      console.log(error.response.data.msg)
    }
    dispatch({type: REMOVE_FILE_FAIL, payload: error})
    
  }
}