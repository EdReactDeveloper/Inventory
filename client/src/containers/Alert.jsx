import React from 'react';
import { connect } from 'react-redux';
import Alert from '../components/Alert';
import {alertsTypes } from './PropTypes'; 

const AlertContainer = (props) => <Alert {...props} />

AlertContainer.propTypes = {
  alerts: alertsTypes.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alerts
})

export default connect(mapStateToProps)(AlertContainer)