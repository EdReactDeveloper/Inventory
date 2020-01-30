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
	EDIT_MODE
} from '../actions/types';

const initialState = {
	data: [],
	page: {},
	selectedItems: [],
	editMode: false,
	itemsLoading: true,
	pageLoading: false,
	fetchingItem: false,
	error: null
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case EDIT_MODE: {
			return { ...state, editMode: !state.editMode };
		}

		case SELECT_ITEM: {
			const isSelected = state.selectedItems.some((item) => item.id === payload.id);
			if (isSelected) {
				return { ...state, selectedItems: state.selectedItems.filter((item) => item.id !== payload.id) };
			}
			return {
				...state,
				selectedItems: [ ...state.selectedItems, payload ]
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
				data: [ ...state.data, payload ],
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
				data: state.data.filter((item) => item._id !== payload),
				pageLoading: false
			};
		}

		case GET_ITEMS_SUCCESS: {
			return {
				...state,
				data: payload.items,
				page: payload.page,
				itemsLoading: false,
				pageLoading: false
			};
		}

		case ADD_ITEM_FAIL:
		case GET_ITEMS_FAIL:
		case UPDATE_ITEM_FAIL:
		case REMOVE_ITEM_FAIL: {
			return {
				...state,
				error: payload,
				itemsLoading: false,
				pageLoading: false
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
