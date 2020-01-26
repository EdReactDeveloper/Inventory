import {
  ADD_ITEM, 
  ADD_ITEM_SUCCESS, 
  ADD_ITEM_FAIL, 
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL
} from '../actions/types'; 

const initialState = {
  data: [],
  itemsLoading: true,
  error: null
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action
  switch(type){
    case ADD_ITEM: {
      return {
        ...state, itemsLoading: true
      }
    }
    case ADD_ITEM_SUCCESS: {
      return {
        ...state, data: [...state.data, payload], itemsLoading: false
      }
    }

    case GET_ITEMS_SUCCESS: {
      return {
        ...state, data: payload, itemsLoading: false
      }
    }

    case ADD_ITEM_FAIL: {
      return {
        ...state, error: payload, itemsLoading: false
      }
    }
    default: return state
  }
}

export default reducer; 