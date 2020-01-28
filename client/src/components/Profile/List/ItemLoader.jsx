import React from 'react';
import Loader from '../../misc/Loader/Lines'; 
import style from '../profile.module.scss';

const Item = () => {
  return (
    <li className={style.item_wrapper}>
      <Loader className={style.loader__item} />
      <div>adding new items...</div>
    </li>
  );
};

export default Item;