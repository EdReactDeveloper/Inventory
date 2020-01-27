import React from 'react';
import { renderProfile } from './formData';
import Button from '../../misc/Elements/Button';

const ProfileForm = ({ profile, onChange, profileLoading, submitFrom, changeCheckBox }) => {

  return (
    <form onSubmit={submitFrom}>
      {renderProfile(profile).map(item => {
        switch (item.type) {
          case 'input': return <label key={item.name} htmlFor={item.name}>
            <h4>{item.heading}</h4>
            <input type="text" name={item.name} value={item.value} onChange={(e) => onChange(e)} />
          </label>;
          case 'textarea': return <label key={item.name} htmlFor={item.name}>
            <h4>{item.heading}</h4>
            <textarea type="text" name={item.name} value={item.value} onChange={(e) => onChange(e)} />
          </label>;
          case 'checkbox': return <label key={item.name} htmlFor={item.name}>
            <h4>{item.heading}</h4>
            <input type="checkbox" name={item.name} checked={item.hidden} onChange={(e) => changeCheckBox(e)} />
          </label>;
          default: return null
        }
      })
      }
         <Button type="submit">
        {profileLoading ? 'loading...' : 'save'}
        </Button>
    </form>
  );
};

export default ProfileForm;