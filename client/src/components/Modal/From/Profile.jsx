import React from 'react';
import { renderProfile } from './formData';
import Button from '../../misc/Elements/Button';
import style from './Forms.module.scss';

const ProfileForm = ({ profile, onChange, profileLoading, submitFrom, changeCheckBox, required }) => {

  return (
    <form onSubmit={submitFrom}>
      {renderProfile(profile).map(item => {
        switch (item.field) {
          case 'input': return <label key={item.name} htmlFor={item.name}>
            <h4>{item.heading}</h4>
            <input 
            type={item.type} 
            name={item.name} 
            value={item.value} 
            onChange={(e) => onChange(e)} 
            className={`${style.input} ${required[item.name] ? style.input_required : ''}`} 
            />
            <div className={style.danger}>{required[item.name]}</div>
          </label>;
          case 'textarea': return <label key={item.name} htmlFor={item.name}>
            <h4>{item.heading}</h4>
            <textarea 
            type={item.type} 
            name={item.name} 
            value={item.value} 
            onChange={(e) => onChange(e)} 
            className={style.textarea}
            />
            <div className={style.danger}>{required[item.name]}</div>
          </label>;
          case 'checkbox': return <label key={item.name} htmlFor={item.name}>
            <h4>{item.heading}</h4>
            <input type={item.type} name={item.name} checked={item.value} onChange={(e) => changeCheckBox(e)} />
            <div className={style.danger}>{required[item.name]}</div>
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