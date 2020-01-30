import React from 'react';
import { Link } from 'react-router-dom';
import style from '../profile.module.scss';
import Button from '../../misc/Elements/Button';
import Loader from '../../misc/Loader/Lines';

const Item = (props) => {
  const { name, path, status, tags, _id, removeItem, inProgress, editMode, selectItemHandler, selectedItems } = props
  const checked = selectedItems.some(item => item.id === _id)
  return (
    <li className={`${style.item_wrapper} ${checked && editMode ? style.item__selected: ''}`}>
      {inProgress.some(item => item === _id) ? <Loader className={style.loader__item} /> :
        <>
          {editMode ?
            (<div>
              <h4>{name}</h4>
              <div className={style.item__details}><span>tags:</span> {tags}</div>
              <div className={style.item__details}><span>status:</span> {status}</div>
              <Button type='delete' onClick={() => removeItem({ id: _id })}>remove</Button>
              <input 
              type="checkbox" 
              checked={checked} 
              onChange={()=> selectItemHandler({id: _id, name})} />
            </div>) :
            (<Link to={`${path}/${_id}`}>
              <h4>{name}</h4>
              <div className={style.item__details}><span>tags:</span> {tags}</div>
              <div className={style.item__details}><span>status:</span> {status}</div>
            </Link>)

          }
        </>
      }
    </li>
  );
};

export default Item;