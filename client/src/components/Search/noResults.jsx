import React from 'react';
import Icon from '../misc/icon/Icon'; 
import {Icons} from '../misc/icon/Selection'; 
import style from './search.module.scss'; 

const NoResults = () => {
  return (
    <div className={style.notFound}>
      <h2>No Results</h2>
      <Icon d={Icons.empty} className={style.icon} size={32}/>
    </div>
  );
};

export default NoResults;