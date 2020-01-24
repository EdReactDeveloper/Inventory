import {DROPDOWN} from './types'; 

const dropdownHandler = (isOpen) => dispatch => {
  dispatch({
    type: DROPDOWN,
    payload: isOpen
  })
}

export default dropdownHandler;