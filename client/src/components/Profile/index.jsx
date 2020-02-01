import React from 'react';
import style from './profile.module.scss';
import BreadCrumbs from './BreadCrumbs';
import ProfileInfo from './Info/Profile';
import ItemInfo from './Info/Item';
import List from './List';
import Loader from '../misc/Loader/Circle';
import Tools from './Tools/ListTools';

const Profile = (props) => {
  const {
    data: { list, profile, page },
    loaders: { itemsLoading },
    checks: { isProfilePage },
  } = props

  return (
    <div className={style.profile__wrapper}>

      <div className={style.content}>
        {list && profile && !itemsLoading ? <>
          <BreadCrumbs {...props} />
          <Tools {...props} />
          <List {...props} />
        </> : <div className={style.loader__wrapper}><Loader className={style.loader} /></div>
        }
      </div>
      <div className={style.info}>
        {isProfilePage ? <ProfileInfo {...props} /> : page ? <ItemInfo {...props} /> : <div>loading...</div>}
      </div>
    </div>
  );
};

export default Profile;