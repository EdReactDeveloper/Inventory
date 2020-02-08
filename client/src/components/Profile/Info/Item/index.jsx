import React from 'react';
import style from '../info.module.scss';
import Loader from '../../../misc/Loader/Circle';

import Edit from '../../../../containers/Form/Page';
import View from './View';
import {FORM_TYPE} from '../../../../configs'; 

const ItemInfo = (props) => {

  const {
    loaders: {
      pageLoading,
    }, 
    checks:{formType}
  } = props
  console.log(formType)
  
  switch(true){
    case pageLoading: return <div className={style.loader__wrapper}><Loader className={style.loader} /></div>
    case formType === FORM_TYPE.edit: return <Edit {...props}/>
    default: return <View {...props} />
  }

};

export default ItemInfo;