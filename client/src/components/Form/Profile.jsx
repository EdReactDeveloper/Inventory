import React from 'react';
import { renderProfile } from './formData';
import Button from '../misc/Elements/Button';
import Field from '../misc/Elements/Input';

const ProfileForm = (props) => {

  const {
    data: {
      state
    },
    methods: {
      submitFrom
    },
    loaders: {
      profileLoading
    }
  } = props

  return (
    <form onSubmit={submitFrom}>
      {renderProfile(state).map(item => {
        return <Field {...props} item={item} key={item.name}/>
      })
      }
      <Button type="submit">
        {profileLoading ? 'loading...' : 'save'}
      </Button>
    </form>
  );
};

export default ProfileForm;