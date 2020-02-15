import React from 'react';
import Circle from './Circle'; 
import Lines from './Lines'; 
import {LOADER_STYLE} from '../../../configs'; 
import style from './loader.module.scss'; 

const Loader = ({type, size=1}) => {

  let loader = null
  switch(type){
    case LOADER_STYLE.lines: loader = <Lines />;break;
    case LOADER_STYLE.circle: loader = <Circle />;break;
    default: loader = 'loading...'
  }
  return (
    <div className={style.wrapper}>
      {loader}
    </div>
  );
};

export default Loader;