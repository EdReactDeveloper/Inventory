import React from 'react';
import style from './info.module.scss'; 

const ItemInfo = ({page: {name, description, location, status, tags, count, type, shared, updated, created }}) => {
  return (
    <div className={style.info__wrapper}>
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
  <li><span>shared: </span>{shared ? 'yes': 'no'}</li>
  <li><span>created on: </span>{created}</li>
  <li><span>updated on: </span>{updated}</li>
</ul>
    </div>
  );
};

export default ItemInfo;