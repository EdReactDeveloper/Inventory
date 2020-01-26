import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reduxForm} from 'redux-form'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './reducers/auth';
import modal from './reducers/modal';
import dropdown from './reducers/dropdown';
import inProgress from './reducers/inprogress';
import alerts from './reducers/alert';
import search from './reducers/search';
import profile from './reducers/profile'; 
import items from './reducers/items'; 
import bread from './reducers/bread'; 

const reducers = combineReducers({
	auth,
	alerts,
	modal,
	dropdown,
	search,
	inProgress,
	profile,
	items,
	bread,
	form: reduxForm
});
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
