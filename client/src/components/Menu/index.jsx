import React from 'react';
import style from './menu.module.scss';

const Menu = (props) => {


  return (
    <div className={style.menu}>
      <div className={style.menu__btn}>
        <div className={style.menu__icon}></div>
        <div className={style.menu__icon}></div>
        <div className={style.menu__icon}></div>
        <ul className={style.menu__list}>
          {props.children}
        </ul>
      </div>

    </div>
  );
};

export default Menu;