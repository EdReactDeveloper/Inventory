import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { func } from 'prop-types';
import Register from '../components/Auth/Register';
import setAlert from '../store/actions/alerts';
import { register } from '../store/actions/auth';
import { formTypes } from './PropTypes';
import { validateLength, isEmail } from '../validators'

const RegisterContainer = ({ history, ...props }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    login: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    },
    passwordRe: {
      value: '',
      error: ''
    }
  })

  const { login, password, passwordRe } = state

  const submitHandler = (e) => {
    e.preventDefault()
    setState({
      ...state,
      password: {...password, error: validateLength(6, 25)(password.value) },
      login: { ...login, error: isEmail(login.value) }
    })
    if (!state.login.error && !state.password.error) {
      if (password.value === passwordRe.value) {
        dispatch(register({ password: password.value, email: login.value, history }))
      } else {
        dispatch(setAlert('passwords should match', 'danger'))
      }
    }
  }

  const onChange = e => {
    setState({ ...state, [e.target.name]: { value: e.target.value, error: '' } })
  }

  return <Register onSubmit={submitHandler} {...props} {...state} onChange={onChange}
  />
}

RegisterContainer.propTypes = {
  setAlert: func.isRequired,
  register: func.isRequired,
  form: formTypes
}

RegisterContainer.defaultProps = {
  form: null
}

export default RegisterContainer