import React from 'react';
import { Link } from 'react-router-dom';
import style from './profile.module.scss';
import {formatTitle} from '../misc/utilFuncs'; 

const BreadCrumbs = ({ data: { bread } }) => {
  return (
    <div className={style.bread}>

      <Link to="/">home</Link>
      {bread.map((item) => {
        return <span key={item.id}>
          <div className={style.bread__icon} />
          <Link to={item.id} key={item.id}>
            {formatTitle(item.name, 17)}
          </Link>
        </span>
      }
      )}
    </div>

  );
};

export default BreadCrumbs;