import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, loading, isLoggedIn, ...rest }) => {
  return <Route {...rest} render={props => (!loading && !isLoggedIn ? <Redirect to='/login' /> : <Component {...props} />)} />
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    isLoggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(PrivateRoute);