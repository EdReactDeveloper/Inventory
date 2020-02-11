import { combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import modal from './modal';
import dropdown from './dropdown';
import inProgress from './inprogress';
import alerts from './alert';
import search from './search';
import profile from './profile'; 
import items from './items'; 
import notification from './notification';
import form from './form'; 

const createRootReducer = history =>{
	 return combineReducers({
		router: connectRouter(history),
		auth,
		alerts,
		modal,
		dropdown,
		search,
		inProgress,
		profile,
		items,
		notification,
		form
	});
}

export default createRootReducer