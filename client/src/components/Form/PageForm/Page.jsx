import React from 'react';
import { add } from '../formData';
import Button from '../../misc/Elements/Button';
import Field from '../../misc/Elements/Input';
import style from '../form.module.scss';
import { FORM_TYPE } from '../../../configs';

const PageForm = (props) => {

  const {
    data: { state },
    methods: { submitFromHandler },
    loaders: { fetchingItem },
    checks: { required, formType }
  } = props
  const className = formType === FORM_TYPE.edit ? style.edit : style.add

  return (
    <form onSubmit={submitFromHandler} className={className}>
      {add({ ...state, required }).map(item => {
        return <Field {...props} item={item} key={item.name} />
      }
      )}
      <Button type="submit">
        {fetchingItem ? 'loading...' : 'save'}
      </Button>
    </form>
  );
};

export default PageForm;


