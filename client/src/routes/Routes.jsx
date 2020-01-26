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
import Profile from '../containers/Profile'; 
import Modal from '../containers/Modal';


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
                <PrivateRoute exact path='/' component={Main}/>
                <PrivateRoute path='/:id' component={Profile}/>
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