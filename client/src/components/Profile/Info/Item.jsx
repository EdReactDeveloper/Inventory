import React from 'react';
import style from './info.module.scss';
import Loader from '../../misc/Loader/Circle';
import Button from '../../misc/Elements/Button';

const ItemInfo = ({ page: { name, description, location, status, tags, count, type, shared, updated, created, _id, path }, pageLoading, removeItem }) => {
  return (
    <div className={style.info__wrapper}>
      {pageLoading ? <div className={style.loader__wrapper}><Loader className={style.loader} /></div> :
        <div>
          <Button type="delete" onClick={()=>removeItem({id: _id, path})}>remove</Button>
          <h3>{name}</h3>
          <p>
            {description}
          </p>
          <ul>
            <li><span>location: </span>{location}</li>
            <li><span>tags: </span>{tags}</li>
            <li><span>status: </span>{status}</li>
            <li><span>count: </span>{count}</li>
            <li><span>type: </span>{type}</li>
            <li><span>shared: </span>{shared ? 'yes' : 'no'}</li>
            <li><span>created on: </span>{created}</li>
            <li><span>updated on: </span>{updated}</li>
          </ul>
        </div>
      }

    </div>
  );
};

export default ItemInfo;