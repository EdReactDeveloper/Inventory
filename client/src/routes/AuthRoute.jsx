import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, isLoggedIn, loading }) => {
  return <Route render={props => (isLoggedIn && !loading ? <Redirect to="/" /> : <Component {...props} />)} />
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    isLoggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(AuthRoute);