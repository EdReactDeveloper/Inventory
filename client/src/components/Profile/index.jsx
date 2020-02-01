import React from 'react';
import style from './profile.module.scss';
import BreadCrumbs from './BreadCrumbs'; 
import ProfileInfo from './Info/Profile';
import ItemInfo from './Info/Item';
import List from './List';
import Button from '../misc/Elements/Button';
import Loader from '../misc/Loader/Circle';


const Profile = (props) => {
const { 
  data:{list, profile, page}, 
  loaders: { itemsLoading }, 
  checks:{isProfilePage} } = props

  return (
    <div className={style.profile__wrapper}>

      <div className={style.content}>
        {list && profile && !itemsLoading ? <>
          <BreadCrumbs {...props} />
          <Button type="add" > add item</Button>
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