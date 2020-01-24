import React from 'react';
import style from './Auth.module.scss';
import Icon from '../../../misc/icon/Icon';
import { Auth } from '../../../misc/icon/Selection';

const Authorized = ({ logout }) => {
  return (
    <div className={style.auth__wrapper}>
      <button type="button" onClick={() => logout()} className={style.auth__item} >
        <Icon d={Auth.logout} className={style.icon} size='30' sizeX='1' />
        logout</button>
    </div>
  );
};

export default Authorized;