import React from 'react';
import Button from '../../misc/Elements/Button';
import FileUpload from '../FileUploader/FileUpload';
import style from '../form.module.scss';
import Form from './Page';

const PageForm = (props) => {
  return (
    <div className={style.wrapper}>
      <Button type="close"/>
      <FileUpload {...props} />
      <Form {...props}/>
    </div>
  );
};

export default PageForm;


