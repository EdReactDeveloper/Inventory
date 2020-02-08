import React from 'react';
import ButtonsBlock from '../../Tools/PageTools';
import style from '../info.module.scss';
import { formatDate } from '../../../misc/utilFuncs';

const View = (props) => {
  const {
    data: {page},

  } = props
  const { name, description, location, status, tags, count, type, shared, updated, created, img } = page
  return (
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
  );
};

export default View;