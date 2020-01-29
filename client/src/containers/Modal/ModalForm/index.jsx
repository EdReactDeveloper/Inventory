import React from 'react';
import { useSelector } from 'react-redux';
import ProfileForm from './Profile';
import PageForm from './Page';
import { FORM_TYPE } from '../../../configs';

const FormContainer = (props) => {
  const items = useSelector(state => state.items)
  const { page } = items
  const { formType } = useSelector(state => state.modal.form)
 
  if(formType === FORM_TYPE.edit && !page){
    return <ProfileForm {...props} />
  }

  return <PageForm {...props} />

};

export default FormContainer;