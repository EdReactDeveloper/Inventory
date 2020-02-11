import React from 'react';
import { add } from './formData';
import Button from '../misc/Elements/Button';
import Field from '../misc/Elements/Input';
import FileUpload from './FileUploader/FileUpload';
import style from './form.module.scss';

const PageForm = (props) => {

  const {
    data: { state },
    methods: { submitFromHandler },
    loaders: { fetchingItem },
    checks: { required }
  } = props

  return (
    <div className={style.form__wrapper}>
      <Button type="close"/>
      <FileUpload {...props} />
      <form onSubmit={submitFromHandler}>
        {add({ ...state, required }).map(item => {
          return <Field {...props} item={item} key={item.name} />
        }
        )}
        <Button type="submit">
          {fetchingItem ? 'loading...' : 'save'}
        </Button>
      </form>
    </div>
  );
};

export default PageForm;


