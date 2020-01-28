import {
	GET_ITEMS,
	GET_ITEMS_SUCCESS,
	GET_ITEMS_FAIL,
	ADD_ITEM,
	ADD_ITEM_SUCCESS,
	ADD_ITEM_FAIL,
	UPDATE_ITEM,
	UPDATE_ITEM_SUCCESS,
	UPDATE_ITEM_FAIL,
	REMOVE_ITEM,
	REMOVE_ITEM_SUCCESS,
	REMOVE_ITEM_FAIL
} from './types';
import { updateItemApi, addItemApi, removeItemApi, getItemsApi } from '../api/items';
import inProgressAction from './inprogress'; 

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

export const removeItemAction = ({ id, path, history }) => async (dispatch) => {
	if(path){
		dispatch({ type: REMOVE_ITEM });
	}else{
		dispatch(inProgressAction(true, id))
	}
	try {
		const result = await removeItemApi(id);
		if (path) {
			history.push(path);	
		}else{
			dispatch(inProgressAction(false, id))
		}
		dispatch({type: REMOVE_ITEM_SUCCESS, payload: result})
	} catch (error) {
		dispatch({ type: REMOVE_ITEM_FAIL });
	}
};
