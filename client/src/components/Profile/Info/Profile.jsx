import React from 'react';
import ButtonsBlock from '../ButtonsBlock';

const ProfileInfo = (props) => {
  const { profile: { profile: { name, description,  _id }, profileUpdating }, removeItem } = props
  const { profile: { profile } } = props
  return (
    <div>
      {!profileUpdating ?
        <div>
          <ButtonsBlock editData={profile} removeItem={removeItem} id={_id} path='/' />
          <h3>{name}</h3>
          <p>{description}</p>

        </div> : <div>loading...</div>
      }
    </div>
  );
};

export default ProfileInfo;