import {
	ADD_ITEM,
	ADD_ITEM_SUCCESS,
	ADD_ITEM_FAIL,
	GET_ITEMS,
	GET_ITEMS_SUCCESS,
	GET_ITEMS_FAIL,
	UPDATE_ITEM_SUCCESS,
	UPDATE_ITEM_FAIL,
	UPDATE_ITEM,
	CLEAN_UP	
} from '../actions/types';

const initialState = {
	data: [],
	page: {},
	itemsLoading: true,
	pageLoading: false,
	error: null
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_ITEM:
		case GET_ITEMS: {
			return {
				...state,
				itemsLoading: true
			};
		}
		case ADD_ITEM_SUCCESS: {
			return {
				...state,
				data: [ ...state.data, payload ],
				itemsLoading: false
			};
		}

		case UPDATE_ITEM: {
			return {
				...state, pageLoading: true
			}
		}

		case UPDATE_ITEM_SUCCESS: {
			return {
				...state, page: payload, pageLoading: false
			}
		}

		case GET_ITEMS_SUCCESS: {
			return {
				...state,
				data: payload.items,
				page: payload.page,
				itemsLoading: false
			};
		}

		case ADD_ITEM_FAIL:
		case GET_ITEMS_FAIL:
		case UPDATE_ITEM_FAIL:	
		{
			return {
				...state,
				error: payload,
				itemsLoading: false,
				pageLoading: false
			};
		}

		case CLEAN_UP: {
			return initialState
		}
		default:
			return state;
	}
};

export default reducer;
