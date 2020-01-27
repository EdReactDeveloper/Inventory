import React from 'react';

const ProfileInfo = ({ profile: { profile: { name, description }, profileUpdating } }) => {

  return (
    <div>
      {!profileUpdating ?
        <div>
          <h3>{name}</h3>
          <p>{description}</p>

        </div> : <div>loading...</div>
      }
    </div>
  );
};

export default ProfileInfo;