import React from 'react';
import { useSelector } from 'react-redux';
import ProfileForm from './Profile';
import PageForm from './Page';
import { FORM_INSTANCE } from '../../../configs';

const FormContainer = (props) => {

  const { instance } = useSelector(state => state.modal.form)
 
  if(instance === FORM_INSTANCE.item){
    return <PageForm {...props} />
  }

  return <ProfileForm {...props} />
};

export default FormContainer;