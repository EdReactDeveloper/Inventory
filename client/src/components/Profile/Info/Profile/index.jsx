import React from 'react';

import Edit from '../../../../containers/Form/Profile'; 
import View from './View'; 
import {FORM_TYPE} from '../../../../configs'; 

const ProfileInfo = (props) => {

  const {
    loaders: {
      profileUpdating
    },
    checks:{
      formType
    }
  } = props
console.log(profileUpdating)
  const renderPage = () => {
    if (formType === FORM_TYPE.edit) {
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