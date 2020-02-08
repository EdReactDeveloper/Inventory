import React from 'react';
import { add } from './formData';
import Button from '../../misc/Elements/Button';
import Field from '../../misc/Elements/Input';
import FileUpload from '../../misc/Elements/Input/Image';

const PageForm = (props) => {

  const {
    data: { state },
    methods: { submitFrom },
    loaders: { fetchingItem },
    checks: { required }
  } = props

  return (
    <div>
      <Button type="close">X</Button>
      <FileUpload {...props} />
      <form onSubmit={submitFrom}>
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


