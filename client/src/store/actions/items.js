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
	EDIT_MODE,
	SELECT_ITEM
} from './types';
import { updateItemApi, addItemApi, removeItemApi, getItemsApi } from '../api/items';
import inProgressAction from './inprogress'; 
import setNotification from './notification'; 
import setAlert from './alerts'; 

export const editHandler = () => dispatch =>{
  dispatch({
    type: EDIT_MODE
  })
}

export const selectItemAction = (payload) => dispatch=>{
	dispatch({type: SELECT_ITEM, payload})
}

export const getItemsAction = (path) => async (dispatch) => {
	dispatch({ type: GET_ITEMS });
	try {
		const result = await getItemsApi(path);
		dispatch({ type: GET_ITEMS_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: GET_ITEMS_FAIL, payload: error });
		dispatch(setAlert(error))
	}
};

export const addItemAction = (payload) => async (dispatch) => {
	dispatch({ type: ADD_ITEM });
	try {
		const result = await addItemApi(payload);
		dispatch(setNotification('added new item'))
		dispatch({ type: ADD_ITEM_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: ADD_ITEM_FAIL, payload: error });
		dispatch(setAlert(error))
		dispatch(setNotification('Failed to add new item'))
	}
};

export const updateItemAction = (payload) => async (dispatch) => {
	dispatch({ type: UPDATE_ITEM });
	try {
		const result = await updateItemApi(payload);
		dispatch({ type: UPDATE_ITEM_SUCCESS, payload: result });
		dispatch(setNotification('Page updaged!'))
	} catch (error) {
		dispatch({ type: UPDATE_ITEM_FAIL, paylod: error });
		dispatch(setAlert(error))
		dispatch(setNotification('Failed to updated the page'))
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
		dispatch(setNotification('item removed!'))
		dispatch({type: REMOVE_ITEM_SUCCESS, payload: result})
	} catch (error) {
		dispatch({ type: REMOVE_ITEM_FAIL });
		dispatch(setAlert(error))
		dispatch(setNotification('Failed to remove the item'))
	}
};
