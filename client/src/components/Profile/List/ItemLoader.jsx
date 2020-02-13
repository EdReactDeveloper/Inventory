import React from 'react';
import style from './list.module.scss';
import {ITEM_STYLE} from '../../../configs'; 

const Item = ({type}) => {
  let className = ''
  let title = ''
  switch(type){
    case ITEM_STYLE.add: className = style.item__add; title = 'adding new item...';break; 
    case ITEM_STYLE.delete: className = style.item__delete; title = 'removing item...';break; 
    case ITEM_STYLE.update: className = style.item__update; title = 'updating page...';break
    default: className=''
  } 
  return (
    <li className={`${className} ${style.itemLoader }`}>
      <div>{title}</div>
    </li>
  );
};

export default Item;