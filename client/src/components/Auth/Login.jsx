import React from 'react';
import style from './Auth.module.scss';

const Login = ({ handleSubmit, onChange, login, password }) => {
  const valid = !password.error && !login.error
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="email" className={style.heading}>email
        <input type="text" name="login" value={login.value} onChange={(e) => onChange(e)} className={`${style.input} ${login.error ? style.danger : ''}`}/>
      <span>{login.error}</span>
      </label>
      <label htmlFor="password" className={style.heading}>password
      <input type="password" name="password" value={password.value} onChange={(e) => onChange(e)} className={`${style.input} ${password.error ? style.danger : ''}`}/>
      <span>{password.error}</span>
      </label>
      <button type="submit" disabled={!valid} className={`${style.submit} ${valid ? '' : style.invalid}`}>login</button>
    </form>
  );
};

export default Login;