import {MODAL} from './types';

export const modalHandler = (payload) => dispatch =>{

  dispatch({
    type: MODAL,
    payload
  })
}

