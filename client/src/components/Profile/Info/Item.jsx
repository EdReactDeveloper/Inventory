import React from 'react';
import style from './info.module.scss';
import Loader from '../../misc/Loader/Circle';
import ButtonsBlock from '../Tools/PageTools';
import { formatDate } from '../../misc/utilFuncs';

const ItemInfo = (props) => {

  const {
    data: { page },
    loaders: {
      pageLoading,
    }
  } = props

  const { name, description, location, status, tags, count, type, shared, updated, created, img } = page
  return (
    <div className={style.info__wrapper}>
      {pageLoading ? <div className={style.loader__wrapper}><Loader className={style.loader} /></div> :
        <div>
          <ButtonsBlock
            {...props}
          />
          {img && <img className={style.img} src={img} alt={img}/>}
          <h3>{name}</h3>
          <ul>
            <li>{description}</li>
            {location && <li><span>location: </span>{location}</li>}
            {tags && <li><span>tags: </span>{tags}</li>}
            {status && <li><span>status: </span>{status}</li>}
            {count && <li><span>count: </span>{count}</li>}
            {type && <li><span>type: </span>{type}</li>}
            {shared && <li><span>shared: </span>{shared ? 'yes' : 'no'}</li>}
            <li><span>created on: </span><span>{formatDate(created)}</span></li>
            {created !== updated && <li><span>updated on: </span><span>{formatDate(updated)}</span></li>}
          </ul>
        </div>
      }

    </div>
  );
};

export default ItemInfo;