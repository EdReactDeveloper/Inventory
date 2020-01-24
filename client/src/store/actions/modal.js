import {MODAL, EDIT} from './types';

export const modalHandler = (payload) => dispatch =>{

  dispatch({
    type: MODAL,
    payload
  })
}

export const editHandler = () => dispatch =>{
  dispatch({
    type: EDIT
  })
}

