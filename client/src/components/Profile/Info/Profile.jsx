import React from 'react';
import ButtonsBlock from '../ButtonsBlock';

const ProfileInfo = (props) => {

  const {
    data: { profile: { name, description, _id }, profile },
    loaders: {
      profileUpdating
    },
    methods: {
      removeItem,
      moveItemsHandler,
      selectedItems
    },
    checks: {
      editMode
    }
  } = props

  return (
    <div>
      {!profileUpdating ?
        <div>
          <ButtonsBlock
            editData={profile}
            removeItem={removeItem} id={_id}
            editMode={editMode}
            path='/'
            selectedItems={selectedItems}
            moveItemsHandler={moveItemsHandler}
          />
          <h3>{name}</h3>
          <p>{description}</p>

        </div> : <div>loading...</div>
      }
    </div>
  );
};

export default ProfileInfo;