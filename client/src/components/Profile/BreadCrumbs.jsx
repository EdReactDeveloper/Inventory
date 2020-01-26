import React from 'react';
import { Link } from 'react-router-dom';
import style from './profile.module.scss';

const BreadCrumbs = ({ items }) => {
  return (
    <div className={style.bread}>
      <Link to="/">home</Link>
      {items && items.map(item => {
        return <Link to={item.path} key={item.id}>
          /{item.name}
        </Link>
      })}
    </div>

  );
};

export default BreadCrumbs;