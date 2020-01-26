import React from 'react';
import {Link } from 'react-router-dom'; 
import style from './main.module.scss'; 

const Main = ({id}) => {
  return (
    <div className={style.main__wrapper}>
      {id  ? <Link to={id}> go to profile</Link> : 'loading'}
    </div>
  );
};

export default Main;