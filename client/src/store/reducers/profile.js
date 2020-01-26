import {
  ADD_ITEM, 
  ADD_ITEM_SUCCESS, 
  ADD_ITEM_FAIL, 
  GET_PROFILE, 
  GET_PROFILE_SUCCESS, 
  GET_PROFILE_FAIL
} from '../actions/types'; 

const initialState = {
  data: {},
  profileLoading: true,
  error: null
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action
  switch(type){
    case GET_PROFILE: {
      return {
        ...state, profileLoading: true
      }
    }
    case GET_PROFILE_SUCCESS: {
      return {
        ...state, data: payload, profileLoading: false
      }
    }

    case GET_PROFILE_FAIL: {
      return {
        ...state, error: payload, profileLoading: false
      }
    }
    default: return state
  }
}

export default reducer; 