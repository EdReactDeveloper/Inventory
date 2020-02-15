import React from 'react';
import Button from '../../misc/Elements/Button';
import style from '../form.module.scss';
import Form from './Profile';
import FileUpload from '../FileUploader/FileUpload';

const ProfileForm = (props) => {

  return (
    <div className={style.wrapper}>
    <Button type="close"/>
    <FileUpload {...props} />
    <Form {...props}/>
  </div>
  );
};

export default ProfileForm;