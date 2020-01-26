import React from 'react';
import style from './profile.module.scss';
import Button from '../misc/Elements/Button';
import Item from '../../containers/Item';

const Profile = ({ loading, items, ...props }) => {
  return (
    <div className={style.profile__wrapper}>
      <div>bread cumbs</div>
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