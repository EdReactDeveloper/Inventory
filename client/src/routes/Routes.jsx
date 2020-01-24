import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderFooter from '../components/HeaderFooter';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import Main from '../containers/Main'; 
import style from '../App.module.scss';

import Alert from '../containers/Alert';
import ErrorBoundry from '../containers/ErrorBoundry';

import Modal from '../containers/Modal';

const BoardsContainer = () => {
  return (
    <div className={style.board}>
      {/* <PrivateRoute path="/" component={Toolbar} /> */}

    </div>
  )
}

const Routes = ({ loading }) => {

  return (
    <Router>
      {!loading && (
        <HeaderFooter>
          <Alert />
          <Route path="/" component={Modal} />
          <ErrorBoundry>
            <div className={style.wrapper}>
              <Switch>
                <AuthRoute exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                {/* <Route render={() => <BoardsContainer />} /> */}
                <PrivateRoute path='/' component={Main}/>
              </Switch>
            </div>
          </ErrorBoundry>
        </HeaderFooter>
      )}
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,

  }
}

export default connect(mapStateToProps)(Routes);