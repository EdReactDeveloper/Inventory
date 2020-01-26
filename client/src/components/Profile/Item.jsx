import React from 'react';
import { Link } from 'react-router-dom';
import style from './profile.module.scss';

const Item = (props) => {
  const { name, path, status, tags, _id } = props
  return (
    <li className={style.item_wrapper}>
      <Link to={`${path}/${_id}`}>
        <h4>{name}</h4>
        <div className={style.item__details}><span>tags:</span> {tags}</div>
        <div className={style.item__details}><span>status:</span> {status}</div>
      </Link>
    </li>
  );
};

export default Item;