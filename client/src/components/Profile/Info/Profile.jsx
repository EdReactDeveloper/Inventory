import React from 'react';
import ButtonsBlock from '../Tools/PageTools';

const ProfileInfo = (props) => {

  const {
    data: { profile: { name, description } },
    loaders: {
      profileUpdating
    },
  } = props

  return (
    <div>
      {!profileUpdating ?
        <div>
          <ButtonsBlock
            {...props}
          />
          <h3>{name}</h3>
          <p>{description}</p>

        </div> : <div>loading...</div>
      }
    </div>
  );
};

export default ProfileInfo;