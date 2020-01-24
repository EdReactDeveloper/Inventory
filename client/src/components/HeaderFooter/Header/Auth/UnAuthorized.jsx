import React from 'react';
import {Link} from 'react-router-dom'; 
import style from './Auth.module.scss'; 

const UnAuthorized = () => {
  return (
    <div className={style.auth__wrapper}>
      <div className={style.auth__item}>
      <Link to="/login">login</Link>
      </div>
      <div className={style.auth__item}>
      <Link to="/register">register</Link>
      </div>
    </div>
  );
};
    
export default UnAuthorized;