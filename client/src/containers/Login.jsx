import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Login from '../components/Auth/Login';
import { loginAction } from '../store/actions/auth';
import { validateLength, isEmail } from '../validators'


const LoginContainer = ({ ...props }) => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    login: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    },
    valid: false
  })

  const { login, password } = state

   const submitHandler = (e) => {
    e.preventDefault()
    setState({
      ...state,
      password: { ...password, error: validateLength(6, 25)(password.value) },
      login: { ...login, error: isEmail(login.value) }
    })

    if (!login.error && !password.error) {
      const { password, login } = state
      dispatch(loginAction({ password: password.value, email: login.value }))
    }
  }

  const onChange = e => {
    setState({ ...state, [e.target.name]: { value: e.target.value, error: '' } })
  }

  return <Login {...props} {...state}
    handleSubmit={submitHandler} onChange={onChange}
  />
}

export default LoginContainer;