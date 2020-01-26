import React from 'react';
import style from './profile.module.scss';
import Button from '../misc/Elements/Button';
import Item from '../../containers/Item';
import BreadCrumbs from '../../containers/BreadCrumbs'; 

const Profile = ({ loading, items, ...props }) => {
  return (
    <div className={style.profile__wrapper}>
      <BreadCrumbs {...props} />
      <ul>
      <Button type="add"> add item</Button>
        {loading ? <div>loading data...</div> :
          items && items.map(item => {
            return <Item key={item._id} {...item} />
          })
        }
      </ul>
    </div>
  );
};

export default Profile;