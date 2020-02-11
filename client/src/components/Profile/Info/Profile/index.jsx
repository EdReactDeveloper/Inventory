import React from 'react';
import Edit from '../../../../containers/Form/Profile';
import View from './View';
import { FORM_TYPE } from '../../../../configs';
import Loader from '../../../misc/Loader/Circle';
import style from '../info.module.scss';

const ProfileInfo = (props) => {

  const {
    loaders: {
      profileUpdating,
      profileLoading
    },
    checks: {
      formType
    }
  } = props

  switch (true) {
    case profileLoading || profileUpdating: return <div className={style.loader__wrapper}><Loader className={style.loader} /></div>
    case formType === FORM_TYPE.edit: return <Edit {...props} />
    default: return <View {...props} />
  }

};

export default ProfileInfo;