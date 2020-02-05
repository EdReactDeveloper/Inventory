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
import NotFound from '../components/404'
import Alert from '../containers/Alert';
import ErrorBoundry from '../containers/ErrorBoundry';
import Profile from '../containers/Profile';
import Modal from '../containers/Modal';
import Notification from '../containers/Notifications';
import Search from '../containers/Seach/SearchPage';

const Routes = ({ loading }) => {

  return (
    <Router>
      {!loading && (
        <HeaderFooter>
          {/* <Alert /> */}
          <Notification />
          <Route path="/" component={Modal} />
          <ErrorBoundry>
            <div className={style.wrapper}>
              <Switch>
                <PrivateRoute path='/search' component={Search} />
                <AuthRoute exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path='/' component={Main} />
                <PrivateRoute exact path='/profile/:id' component={Profile} />
                <PrivateRoute component={NotFound} />
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