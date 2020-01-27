import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes/Routes';
import store from './store';
import getUserAction from './store/actions/user';
import style from './App.module.scss';
import history from './history';

const App = () => {
	useEffect(() => {
		store.dispatch(getUserAction())
	}, [])
	return (
		<div className={style.app}>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Routes />
				</ConnectedRouter>
			</Provider>
		</div>
	);
}

export default App;
