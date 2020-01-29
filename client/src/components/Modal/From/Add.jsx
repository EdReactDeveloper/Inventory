import React from 'react';
import { add } from './formData';
import Button from '../../misc/Elements/Button';
import Field from '../../misc/Elements/Input';

const PageForm = ({
  name, description, tags,
  category, status, statusArray,
  count, location, type,
  onChange, submitFrom,
  changeCheckBox, shared,
  fetchingItem, required
}) => {


  const renderPayload = { name, description, tags, category, count, location, type, shared, status, required }
  const fieldPayload = { onChange, changeCheckBox, required, statusArray }

  return (
    <form onSubmit={submitFrom}>
      {add(renderPayload).map(item => {
        return <Field {...fieldPayload} item={item} key={item.name} />
      }
      )}

      <Button type="submit">
        {fetchingItem ? 'loading...' : 'save'}
      </Button>
    </form>
  );
};

export default PageForm;

  // 1. prop is in the array 
  // 2. prop.value is required
  // 3. push the value in the array of empty

