import {MODAL} from './types/modal';

// OPEN MODAL WINDOW
export const modalHandler = (payload) => dispatch =>{
  dispatch({
    type: MODAL,
    payload
  })
}

