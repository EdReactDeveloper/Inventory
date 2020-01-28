import React from 'react';
import { Link } from 'react-router-dom';
import style from '../profile.module.scss';
import Button from '../../misc/Elements/Button'; 
import Loader from '../../misc/Loader/Lines'; 

const Item = (props) => {
  const { name, path, status, tags, _id, removeItem, inProgress } = props

  return (
    <li className={style.item_wrapper}>
      {inProgress.some(item => item === _id) ? <Loader className={style.loader__item} /> : 
      <>
      <Link to={`${path}/${_id}`}>
        <h4>{name}</h4>
        <div className={style.item__details}><span>tags:</span> {tags}</div>
        <div className={style.item__details}><span>status:</span> {status}</div>
      </Link>
        <Button type='delete' onClick={()=>removeItem({id:_id})}>remove</Button>
        </>
      }
    </li>
  );
};

export default Item;