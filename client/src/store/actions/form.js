import {FORM, FORM_CLOSE} from './types';

export const formHandler = (payload) => dispatch =>{
  if(payload){
    dispatch({
      type: FORM,
      payload
    })
  }else{
    dispatch({type: FORM_CLOSE})
  }
}



