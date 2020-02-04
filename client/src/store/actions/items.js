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
	REMOVE_ITEM_FAIL,
	SELECT_ITEM,
	MOVE_ITEMS,
	MOVE_ITEMS_SUCCESS,
	MOVE_ITEMS_FAIL,
	UNSELECT_ITEMS
} from './types';
import { updateItemApi, addItemApi, removeItemApi, getItemsApi, moveSelectedItemsApi } from '../api/items';
import inProgressAction from './inprogress';
import setNotification from './notification';
import setAlert from './alerts';


// SELECT
export const selectItemAction = (payload) => (dispatch) => {
	dispatch({ type: SELECT_ITEM, payload });
};

// MOVE
export const moveItemsAction = ({ id, items, path }) => async (dispatch) => {
	dispatch({ type: MOVE_ITEMS });
	const docs = [];
	for (let i = 0; i < items.length; i++) {
		if (items[i].parentId !== id) {
			docs.push(items[i].id);
		}
	}
	try {
		const result = await moveSelectedItemsApi({ id, docs, path });
		dispatch({ type: MOVE_ITEMS_SUCCESS, payload: result });
		setTimeout(() => {
			dispatch({ type: UNSELECT_ITEMS });
		}, 1500);
	} catch (error) {
		dispatch({ type: MOVE_ITEMS_FAIL, payload: error });
	}
};


// GET
export const getItemsAction = (id) => async (dispatch) => {
	dispatch({ type: GET_ITEMS });
	try {
		const result = await getItemsApi(id);
		dispatch({ type: GET_ITEMS_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: GET_ITEMS_FAIL, payload: error });
		dispatch(setAlert(error));
	}
};


// ADD
export const addItemAction = (payload) => async (dispatch) => {
	dispatch({ type: ADD_ITEM });
	try {
		const result = await addItemApi(payload);
		dispatch(setNotification('added new item'));
		dispatch({ type: ADD_ITEM_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: ADD_ITEM_FAIL, payload: error });
		dispatch(setAlert(error));
		dispatch(setNotification('Failed to add new item'));
	}
};


// UPDATE
export const updateItemAction = (payload) => async (dispatch) => {
	dispatch({ type: UPDATE_ITEM });
	try {
		const result = await updateItemApi(payload);
		dispatch({ type: UPDATE_ITEM_SUCCESS, payload: result });
		dispatch(setNotification('Page updaged!'));
	} catch (error) {
		dispatch({ type: UPDATE_ITEM_FAIL, paylod: error });
		dispatch(setAlert(error));
		dispatch(setNotification('Failed to updated the page'));
	}
};


// REMOVE ITEM
export const removeItemAction = ({ id, deleteAll }) => async (dispatch) => {
	const payload = {id, deleteAll}
	dispatch(inProgressAction(true, id));
	try {
		const result = await removeItemApi(payload);
		dispatch(inProgressAction(false, id));
		dispatch(setNotification('item removed!'));
		dispatch({ type: REMOVE_ITEM_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: REMOVE_ITEM_FAIL });
		dispatch(setAlert(error));
		dispatch(setNotification('Failed to remove the item'));
	}
};


// REMOVE PAGE
export const removePageAction = ({ id, parentId, history, deleteAll }) => async (dispatch) => {
	const payload = { id, deleteAll }
	dispatch({ type: REMOVE_ITEM });
	try {
		const result = await removeItemApi(payload);
		history.push(parentId);
		dispatch(setNotification('item removed!'));
		dispatch({ type: REMOVE_ITEM_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: REMOVE_ITEM_FAIL });
		dispatch(setAlert(error));
		dispatch(setNotification('Failed to remove the item'));
	}
};
