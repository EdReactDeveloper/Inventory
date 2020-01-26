import React from 'react';
import style from './main.module.scss'; 
import Button from '../misc/Elements/Button'; 
import {Link } from 'react-router-dom'; 

const Main = ({id, ...props}) => {
  return (
    <div className={style.main__wrapper}>
      <Link to={id}> go to profile</Link>
    </div>
  );
};

export default Main;