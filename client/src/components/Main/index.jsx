import React from 'react';
import style from './main.module.scss'; 
import Button from '../misc/Elements/Button'; 

const Main = () => {
  return (
    <div className={style.main__wrapper}>
      <Button type="add"> add item</Button>
    </div>
  );
};

export default Main;