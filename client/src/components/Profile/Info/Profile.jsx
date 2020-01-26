import React from 'react';

const ProfileInfo = ({profile}) => {
  return (
    <div>
      {profile ? 
    <div>Profile info</div> : <div>loading...</div>
    }
    </div>
  );
};

export default ProfileInfo;