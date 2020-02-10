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
	CLEAN_UP,
	REMOVE_ITEM,
	REMOVE_ITEM_SUCCESS,
	REMOVE_ITEM_FAIL,
	SELECT_ITEM,
	MOVE_ITEMS,
	MOVE_ITEMS_SUCCESS,
	MOVE_ITEMS_FAIL,
	UNSELECT_ITEMS
} from '../actions/types';

const initialState = {
	list: [],
	page: {},
	bread: [],
	selectedItems: [],
	itemsLoading: true,
	pageLoading: false,
	fetchingItem: false,
	movedItemsFetching: false,
	error: null
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
	
		case SELECT_ITEM: {
			const isSelected = state.selectedItems.some((item) => item.id === payload.id);
			if (isSelected) {
				return { ...state, selectedItems: state.selectedItems.filter((item) => item.id !== payload.id) };
			}
			return {
				...state,
				selectedItems: [ payload, ...state.selectedItems ]
			};
		}

		case UNSELECT_ITEMS: {
			return {
				...state, selectedItems: []
			}
		}

		case MOVE_ITEMS: {
			return { ...state, movedItemsFetching: true };
		}

		case MOVE_ITEMS_SUCCESS: {
			return {
				...state,
				list: [ ...payload, ...state.list ],
				movedItemsFetching: false
			};
		}

		case GET_ITEMS: {
			return {
				...state,
				itemsLoading: true,
				pageLoading: true
			};
		}

		case ADD_ITEM: {
			return {
				...state,
				fetchingItem: true
			};
		}

		case ADD_ITEM_SUCCESS: {
			return {
				...state,
				list: [ payload, ...state.list ],
				fetchingItem: false
			};
		}

		case UPDATE_ITEM:
		case REMOVE_ITEM: {
			return {
				...state,
				pageLoading: true
			};
		}

		case UPDATE_ITEM_SUCCESS: {
			return {
				...state,
				page: payload,
				pageLoading: false
			};
		}

		case REMOVE_ITEM_SUCCESS: {
			return {
				...state,
				list: state.list.filter((item) => item._id !== payload.id),
				pageLoading: false
			};
		}

		case GET_ITEMS_SUCCESS: {
			const updatedList = payload.items.sort((a,b)=> new Date(b.updated) - new Date(a.updated))
			return {
				...state,
				list: updatedList,
				page: payload.page,
				bread: payload.bread,
				itemsLoading: false,
				pageLoading: false
			};
		}

		case ADD_ITEM_FAIL:
		case GET_ITEMS_FAIL:
		case UPDATE_ITEM_FAIL:
		case MOVE_ITEMS_FAIL:
		case REMOVE_ITEM_FAIL: {
			return {
				...state,
				error: payload,
				itemsLoading: false,
				pageLoading: false,
				fetchingItem: false,
				movedItemsFetching: false
			};
		}

		case CLEAN_UP: {
			return initialState;
		}
		default:
			return state;
	}
};

export default reducer;
