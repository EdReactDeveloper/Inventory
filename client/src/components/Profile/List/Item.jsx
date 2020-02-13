import React from 'react';
import { Link } from 'react-router-dom';
import style from './list.module.scss';
import Button from '../../misc/Elements/Button';
import ItemLoader from './ItemLoader';
import Menu from '../../Menu';
import { FORM_INSTANCE, ITEM_STYLE } from '../../../configs';
import {formatTitle} from '../../misc/utilFuncs';

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
  const defaultImg = '/uploads/notfound.png'
  const selectedItem = { id: _id, name, parentId }
  const checked = selectedItems.some(item => item.id === _id)

  const dropMenu = <Menu className={style.item__menu}>
    <li><Button type='check' checked={checked} onClick={() => selectItemHandler(selectedItem)} >
      {checked ? 'unselect item' : 'select item'}</Button></li>
    <li><Button type='delete' payload={{ id: _id, instance: FORM_INSTANCE.item, parentId, name }}>remove</Button></li>
  </Menu>

  return (
    <>
      {inProgress.some(item => item === _id) ? <ItemLoader type={ITEM_STYLE.delete} /> :
        <li className={`${style.item} ${checked ? style.item__selected : ''}`}>
          <>
          <figure>
            {img ?
              <img src={img} alt='not found' className={style.item__img} />
              : <img src={defaultImg} alt='not found' className={style.item__img} />
            }
            </figure>
            {checked ?
              (<div className={style.item__info}>
                <h4>{formatTitle(name, 17)}</h4>
                <div className={style.item__details}><span>tags:</span> {tags}</div>
                <div className={style.item__details}><span>status:</span> {status}</div>
              </div>) :
              (
                <div className={style.item__info}>
                  <Link to={_id}>
                    <h4>{formatTitle(name, 17)}</h4>
                    <div className={style.item__details}><span>tags:</span> {tags}</div>
                    <div className={style.item__details}><span>status:</span> {status}</div>
                  </Link>
                </div>
              )

            }
            {dropMenu}
          </>
        </li>
      }
    </>
  );
};

export default Item;