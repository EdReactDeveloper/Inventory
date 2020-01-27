import React from 'react';

const ProfileInfo = ({ profile: { profile: { name, description }, profileLoading } }) => {

  return (
    <div>
      {!profileLoading ?
        <div>
          <h3>{name}</h3>
          <p>{description}</p>

        </div> : <div>loading...</div>
      }
    </div>
  );
};

export default ProfileInfo;