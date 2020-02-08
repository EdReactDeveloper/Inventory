import {FORM} from './types';

export const formHandler = (payload) => dispatch =>{
  dispatch({
    type: FORM,
    payload
  })
}

