import React from 'react';

import Edit from '../../../../containers/Modal/ModalForm/Profile'; 
import View from './View'; 

const ProfileInfo = (props) => {

  const {
    loaders: {
      profileUpdating
    },
    checks:{
      editMode
    }
  } = props

  const renderPage = () => {
    if (editMode) {
      return <Edit {...props}/>
    }
    return <View {...props} />
  }


  return (
    <div>
      {!profileUpdating ?
        renderPage() : <div>loading...</div>
      }
    </div>
  );
};

export default ProfileInfo;