import React from 'react';
import Button from '../../misc/Elements/Button';

const ProfileInfo = (props) => {
  const { profile: {profile: { name, description }, profileUpdating }} = props
  const {profile: {profile}} = props
  return (
    <div>
      {!profileUpdating ?
        <div>
          <Button type="edit" editData={profile}>edit</Button>
          <h3>{name}</h3>
          <p>{description}</p>

        </div> : <div>loading...</div>
      }
    </div>
  );
};

export default ProfileInfo;