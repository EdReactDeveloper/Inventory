import {
  FORM, 
  FORM_CLOSE,
  UPLOADING, 
  UPLOADING_SUCCESS, 
  UPLOADING_FAIL, 
  REMOVE_FILE_SUCCESS, 
  REMOVE_FILE_FAIL, 
} from './types/form';
import {UPDATE_ITEM_SUCCESS} from './types/items'; 
 
import {fileUploadApi, removeFileApi} from '../api/upload'; 
import {uploadImgApi} from '../api/items'; 
import {FORM_TYPE} from '../../configs'; 

// OPEN / CLOSE FORM
export const formHandler = (payload) => dispatch =>{
  if(payload){
    dispatch({type: FORM_CLOSE})
    dispatch({
      type: FORM,
      payload
    })
  }else{
    dispatch({type: FORM_CLOSE})
  }
}


// UPLOAD IMAGE
export const fileUploadAction = ({formData, setUploadPersentage, id, formType}) => async dispatch =>{
  dispatch({type: UPLOADING})
  try {

    // upload image to fs
    const result = await fileUploadApi({formData, setUploadPersentage, id})
    const {filePath} = result
  
    // save image name in db
    if(filePath && id && formType ===FORM_TYPE.edit){
      const item = await uploadImgApi({img: filePath, id})
      dispatch({type: UPDATE_ITEM_SUCCESS, payload: item})
    } 
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

// REMOVE IMAGE
export const removeFileAction = (payload) => async dispatch =>{
  dispatch({type: UPLOADING})
  try {
    const item = await removeFileApi(payload)
    dispatch({type: REMOVE_FILE_SUCCESS})
    if(item){ // for edit page form
      dispatch({type: UPDATE_ITEM_SUCCESS, payload: item})
    }
  } catch (error) {
    if(error.response.status === 500){
      console.log('there was a problem with the server')
    }else{
      console.log(error.response.data.msg)
    }
    dispatch({type: REMOVE_FILE_FAIL, payload: error})
    
  }
}
