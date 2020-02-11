import {DROPDOWN} from './types/dropdown'; 

// DROPDOWN MENU HANDLER
const dropdownHandler = (isOpen) => dispatch => {
  dispatch({
    type: DROPDOWN,
    payload: isOpen
  })
}

export default dropdownHandler;