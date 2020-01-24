import React from 'react';
import style from './Auth.module.scss';

const Register = ({
  onSubmit, login, password, passwordRe, onChange
}) => {
  const valid = !password.error && !login.error
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <label htmlFor="email" className={style.heading}>email
        <input type="email" name="login" value={login.value}
          onChange={(e) => onChange(e)}
          className={`${style.input} ${login.error ? style.danger : ''}`}
        />
        <span>{login.error}</span>
      </label>
      <label htmlFor="password" className={style.heading}>password
      <input type="password" name="password" value={password.value}
          onChange={(e) => onChange(e)}
          className={`${style.input} ${password.error ? style.danger : ''}`}
        />
        <span>{password.error}</span>
      </label>
      <label htmlFor="passwordRe" className={style.heading}>repeat password
      <input type="passwordRe" name="passwordRe" value={passwordRe.value}
          onChange={(e) => onChange(e)}
          className={`${style.input} ${passwordRe.error ? style.danger : ''}`}
        />
      </label>
      <button type="submit" disabled={!valid} className={`${style.submit} ${valid ? '' : style.invalid}`}>submit</button>
    </form>
  );
};

export default Register;