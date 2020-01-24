import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import store from './store';
import getUserAction from './store/actions/user';
import style from './App.module.scss'; 

const App =()=> {
	useEffect(() => {
		store.dispatch(getUserAction())
	}, [])
	return (
		<div className={style.app}> 
			<Provider store={store}>
				<Routes />
			</Provider>
		</div>
	);
}

export default App;
