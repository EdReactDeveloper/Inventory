import axios from 'axios'; 
import {ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAIL} from './types'; 
import {getItemApi, getAllItemsApi, addItemApi, removeItemApi} from '../api/items'; 


export const getItemsAction = () => async dispatch => {
  dispatch({type: ADD_ITEM})
  try {
    const result = await getAllItemsApi()
    console.log(result)
  } catch (error) {
    dispatch({type: ADD_ITEM_FAIL, payload: error})
  }
} 

export const addItemAction = (payload, type) => async dispatch => {
  dispatch({type: ADD_ITEM})
  try {
    const result = await addItemApi(payload, type)
    console.log(result)
  } catch (error) {
    dispatch({type: ADD_ITEM_FAIL, payload: error})
  }
} 

export const updateItemAction = (payload, type) => dispatch => {

}