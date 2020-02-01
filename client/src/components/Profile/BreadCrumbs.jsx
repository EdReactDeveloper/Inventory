import React from 'react';
import { Link } from 'react-router-dom';
import style from './profile.module.scss';

const BreadCrumbs = ({data:{bread}}) => {
  return (
    <div className={style.bread}>
        <div>
          <Link to="/">home</Link>
          {bread.map((item) => {
            return <Link to={item.id} key={item.id}>
            \{item.name}
          </Link>
          }
          )}
          <span>\...</span>
        </div>
     
    </div>

  );
};

export default BreadCrumbs;