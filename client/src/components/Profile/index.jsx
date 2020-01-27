import React from 'react';
import style from './profile.module.scss';


import BreadCrumbs from '../../containers/BreadCrumbs';
import ProfileInfo from './Info/Profile';
import ItemInfo from './Info/Item';
import List from './List';
import Buttons from './Buttons'; 

const Profile = ({ profile, items, fetchingItem, itemsLoading,  page, ...props }) => {

  
  return (
    <div className={style.profile__wrapper}>
      <div className={style.content}>
        {items && profile && !itemsLoading ? <>
        <BreadCrumbs {...props} page={page} profile={profile} />
        <Buttons {...props}/>
        <List items={items} page={page} profile={profile} fetchingItem={fetchingItem} />
        </> : <div>loading...</div>
      }
      </div>
      <div className={style.info}>
        {page ? <ItemInfo page={page} /> : <ProfileInfo profile={profile} />}
      </div>
    </div>
  );
};

export default Profile;