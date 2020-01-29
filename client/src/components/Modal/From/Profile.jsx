import React from 'react';
import { renderProfile } from './formData';
import Button from '../../misc/Elements/Button';
import Field from '../../misc/Elements/Input';

const ProfileForm = ({ profile, onChange, profileLoading, submitFrom, changeCheckBox, required }) => {
  const fieldPayload = { onChange, changeCheckBox, required }
  return (
    <form onSubmit={submitFrom}>
      {renderProfile(profile).map(item => {
        return <Field {...fieldPayload} item={item} key={item.name}/>
      })
      }
      <Button type="submit">
        {profileLoading ? 'loading...' : 'save'}
      </Button>
    </form>
  );
};

export default ProfileForm;