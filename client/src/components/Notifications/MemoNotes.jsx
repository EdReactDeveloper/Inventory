import React from 'react';
import style from './notifications.module.scss';
import {formatTitle} from '../misc/utilFuncs'; 

const MemoNotes = ({selectedItems=[], selectItemHandler}) => {
  // selectedItems = [{id, name}]

  return (
    <ul className={style.notification__container}>
      {selectedItems.length > 0 && selectedItems.map(item => {
        const {id, name, parenId} = item
        return <li key={id}
          className={style.notification__wrapper}>
          <span>{formatTitle(name, 15)}</span>
          <button className={style.notification__button} type="button" onClick={()=> selectItemHandler({id, name, parenId})}>
            <span className={style.notification__button_icon}/>
          </button>
        </li>
      })}
    </ul>
  );
};

export default MemoNotes;