import React from 'react';
import style from '../info.module.scss';
import Loader from '../../../misc/Loader/Circle';
import Edit from '../../../../containers/Form/Page';
import View from './View';
import {FORM_TYPE, ITEM_STYLE} from '../../../../configs'; 
import ItemLoader from '../../List/ItemLoader'; 

const ItemInfo = (props) => {

  const {
    loaders: {
      pageLoading,
    }, 
    checks:{formType}
  } = props

  const loaders = () =>{
    return <div>
      <ItemLoader type={ITEM_STYLE.update}/>
      <div className={style.loader__wrapper}><Loader className={style.loader} /></div>
    </div>
  }

  switch(true){
    case pageLoading: return loaders()
    case formType === FORM_TYPE.edit: return <Edit {...props}/>
    default: return <View {...props} />
  }

};

export default ItemInfo;