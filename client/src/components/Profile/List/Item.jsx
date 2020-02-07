import React from 'react';
import { Link } from 'react-router-dom';
import style from '../profile.module.scss';
import Button from '../../misc/Elements/Button';
import Loader from '../../misc/Loader/Lines';
import Menu from '../../Menu';
import { FORM_INSTANCE } from '../../../configs';

const Item = (props) => {

  // PROPS
  const { item: { name, img, status, tags, _id, parentId },
    data: {
      selectedItems
    },
    methods: {
      selectItemHandler,
    },
    loaders: {
      inProgress
    }
  } = props

  const selectedItem = { id: _id, name, parentId }
  const checked = selectedItems.some(item => item.id === _id)

  const dropMenu = <Menu className={style.item__menu}>
    <li><Button type='delete' payload={{ id: _id, instance: FORM_INSTANCE.item, parentId, name }}>remove</Button></li>
    <li><Button type='check' checked={checked} onClick={() => selectItemHandler(selectedItem)} >
      {checked ? 'unselect item' : 'select item'}</Button></li>
  </Menu>

  return (
    <li className={`${style.item_wrapper} ${checked ? style.item__selected : ''}`}>
      {inProgress.some(item => item === _id) ? <Loader className={style.loader__item} /> :
        <>
          <img src={img} alt={img} className={style.item__img} />
          {checked ?
            (<div className={style.item__info}>
              <h4>{name}</h4>
              <div className={style.item__details}><span>tags:</span> {tags}</div>
              <div className={style.item__details}><span>status:</span> {status}</div>
            </div>) :
            (
              <div className={style.item__info}>
                <Link to={_id}>
                  <h4>{name}</h4>
                  <div className={style.item__details}><span>tags:</span> {tags}</div>
                  <div className={style.item__details}><span>status:</span> {status}</div>
                </Link>
              </div>
            )

          }
        </>
      }
      {dropMenu}
    </li>
  );
};

export default Item;