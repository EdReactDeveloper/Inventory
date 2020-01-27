import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducers'; 
import history from '../history';

const store = createStore(createRootReducer(history), composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)));

window.store = store;

export default store;

