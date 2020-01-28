import React from 'react';
import style from './profile.module.scss';
import BreadCrumbs from '../../containers/BreadCrumbs';
import ProfileInfo from './Info/Profile';
import ItemInfo from './Info/Item';
import List from './List';
import Button from '../misc/Elements/Button';
import Loader from '../misc/Loader/Circle';


const Profile = (props) => {
const { profile, items, itemsLoading, page, isProfilePage } = props
  return (
    <div className={style.profile__wrapper}>

      <div className={style.content}>
        {items && profile && !itemsLoading ? <>
          <BreadCrumbs {...props} />
          <Button type="add" > add item</Button>
          <List {...props} />
        </> : <div className={style.loader__wrapper}><Loader className={style.loader} /></div>
        }
      </div>
      <div className={style.info}>
        {isProfilePage ? <ProfileInfo profile={profile} {...props} /> : page ? <ItemInfo {...props} /> : <div>loading...</div>}
      </div>
    </div>
  );
};

export default Profile;