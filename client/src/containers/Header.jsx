import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/HeaderFooter/Header';
import { logout } from '../store/actions/auth';

const HeaderContainer = (props) => {
return <Route to='/' render={(routing) => <Header {...props} routing={routing} />}  />
}


HeaderContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.loggedIn,
  }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);