import React from 'react';
import { Link } from 'react-router-dom';
import style from '../profile.module.scss';
import Button from '../../misc/Elements/Button';
import Loader from '../../misc/Loader/Lines';

const Item = (props) => {

  // PROPS
  const { item: { name, status, tags, _id, parentId },
    methods: {
      removeItem,
      selectItemHandler,
      selectedItems
    },
    loaders: {
      inProgress
    },
    checks: {
      editMode
    }
  } = props

   const selectedItem = { id: _id, name, parentId }
  const checked = selectedItems.some(item => item.id === _id)

  return (
    <li className={`${style.item_wrapper} ${checked ? style.item__selected : ''}`}>
      {inProgress.some(item => item === _id) ? <Loader className={style.loader__item} /> :
        <>
          {checked ?
            (<div>
              <h4>{name}</h4>
              <div className={style.item__details}><span>tags:</span> {tags}</div>
              <div className={style.item__details}><span>status:</span> {status}</div>
              <Button type='delete' onClick={() => removeItem({ id: _id })}>remove</Button>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => selectItemHandler(selectedItem)} />
            </div>) :
            (
              <div>
                <Link to={_id}>
                  <h4>{name}</h4>
                  <div className={style.item__details}><span>tags:</span> {tags}</div>
                  <div className={style.item__details}><span>status:</span> {status}</div>
                </Link>
                <Button type='delete' onClick={() => removeItem({ id: _id })}>remove</Button>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => selectItemHandler(selectedItem)} />
              </div>
            )

          }
        </>
      }
    </li>
  );
};

export default Item;