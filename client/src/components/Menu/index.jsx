import React from 'react';
import style from './menu.module.scss';

const Menu = (props) => {

  const { children, className } = props
  return (
    <div className={`${style.menu} ${className}`}>
      <div className={style.menu__btn}>
        <div className={style.menu__icon} />
        <div className={style.menu__icon} />
        <div className={style.menu__icon} />
        <ul className={style.menu__list}>
          {children}
        </ul>
      </div>

    </div>
  );
};

export default Menu;