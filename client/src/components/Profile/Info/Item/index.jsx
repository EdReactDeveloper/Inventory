import React from 'react';
import style from '../info.module.scss';
import Loader from '../../../misc/Loader/Circle';

import Edit from '../../../../containers/Modal/ModalForm/Page';
import View from './View';

const ItemInfo = (props) => {

  const {
    data: { page, form },
    loaders: {
      pageLoading,
    },
    checks: {
      editMode
    }
  } = props

  const renderPage = () => {
    if (editMode) {
      return <Edit {...props}/>
    }
    return <View {...props} />
  }

  return (
    <div className={style.info__wrapper}>
      {pageLoading ? <div className={style.loader__wrapper}><Loader className={style.loader} /></div> :
        renderPage()
      }

    </div>
  );
};

export default ItemInfo;