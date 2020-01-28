import React from 'react';
import { Link } from 'react-router-dom';
import style from './profile.module.scss';

const BreadCrumbs = ({ items: {items, itemsLoading}, profile }) => {
  return (
    <div className={style.bread}>
      {profile && !itemsLoading ?
        <div>
          <Link to="/">home</Link>
          {items.map((item, index) => {
            if(index < items.length-1){
              return <Link to={item.path} key={item.id}>
              \{item.name}
            </Link>
            }
            return <span key={item.id}>\...</span>
          }
          )}
        </div>
      : <div>loading...</div>
      }
    </div>

  );
};

export default BreadCrumbs;