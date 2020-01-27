import {
	GET_ITEMS,
	GET_ITEMS_SUCCESS,
	GET_ITEMS_FAIL,
	ADD_ITEM,
	ADD_ITEM_SUCCESS,
	ADD_ITEM_FAIL,
	UPDATE_ITEM,
	UPDATE_ITEM_SUCCESS,
	UPDATE_ITEM_FAIL
} from './types';
import { updateItemApi, addItemApi, removeItemApi, getItemsApi } from '../api/items';

export const getItemsAction = (path) => async (dispatch) => {
	dispatch({ type: GET_ITEMS });
	try {
		const result = await getItemsApi(path);
		dispatch({ type: GET_ITEMS_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: GET_ITEMS_FAIL, payload: error });
	}
};

export const addItemAction = (payload) => async (dispatch) => {
	dispatch({ type: ADD_ITEM });
	try {
		const result = await addItemApi(payload);
		dispatch({ type: ADD_ITEM_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: ADD_ITEM_FAIL, payload: error });
	}
};

export const updateItemAction = (payload) => async (dispatch) => {
	dispatch({ type: UPDATE_ITEM });
	try {
		const result = await updateItemApi(payload);
		dispatch({ type: UPDATE_ITEM_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: UPDATE_ITEM_FAIL, error: payload });
	}
};
