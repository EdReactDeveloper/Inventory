import React from 'react';
import style from './profile.module.scss';
import BreadCrumbs from './BreadCrumbs';
import ProfileInfo from './Info/Profile';
import ItemInfo from './Info/Item';
import List from './List';
import Loader from '../misc/Loader/Circle';
import Tools from './Tools/ListTools';
import { FORM_TYPE } from '../../configs';
import Form from '../../containers/Form/Page';

const Profile = (props) => {
  const {
    data: { list, profile },
    loaders: { itemsLoading },
    checks: { isProfilePage, formType, isItemPage },
  } = props

  const renderInfo = () => {
    switch (true) {
      case isProfilePage: return <ProfileInfo {...props} />
      case isItemPage: return <ItemInfo {...props} />
      default: return <Loader className={style.loader} />
    }
  }

  const renderList = () => {
    switch (formType) {
      case FORM_TYPE.add: return <Form {...props} />
      default: return <List {...props} />
    }
  }

  return (
    <>
      <div className={style.content}>
        {list && profile && !itemsLoading ? <>
          <BreadCrumbs {...props} />
          <Tools {...props} />
          {renderList()}
        </> : <div className={style.loader__wrapper}><Loader className={style.loader} /></div>
        }
      </div>
      <div className={style.info}>
        {renderInfo()}
      </div>
    </>
  );
};

export default Profile;