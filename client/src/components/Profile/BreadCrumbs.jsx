import React from 'react';
import { Link } from 'react-router-dom';
import style from './profile.module.scss';

const BreadCrumbs = ({ items: {items, itemsLoading}, profile }) => {
  return (
    <div className={style.bread}>
      {profile && !itemsLoading ?
        <div>
          <Link to="/">home</Link>
          {items.map(item => {
            return <Link to={item.path} key={item.id}>
              /{item.name}
            </Link>
          })}
        </div>
      : <div>loading...</div>
      }
    </div>

  );
};

export default BreadCrumbs;