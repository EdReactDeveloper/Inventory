import React from 'react';
import style from './info.module.scss';
import Loader from '../../misc/Loader/Circle';
import ButtonsBlock from '../ButtonsBlock';

const ItemInfo = ({ page, pageLoading, removeItem, ...props }) => {
  const { name, description, location, status, tags, count, type, shared, updated, created, _id, path } = page
  return (
    <div className={style.info__wrapper}>
      {pageLoading ? <div className={style.loader__wrapper}><Loader className={style.loader} /></div> :
        <div>
          <ButtonsBlock editData={page} removeItem={removeItem} id={_id} path={path} />
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