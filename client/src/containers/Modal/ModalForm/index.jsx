import React from 'react';
import { useSelector } from 'react-redux';
import ProfileForm from './Profile';
import PageForm from './Page';
import DeleteForm from './Delete'; 
import { FORM_INSTANCE, FORM_TYPE } from '../../../configs';

const FormContainer = (props) => {

  const { instance, formType } = useSelector(state => state.modal.form)

  // CONDITIONS
  const pageForms = 
  (instance === FORM_INSTANCE.page || instance === FORM_INSTANCE.item) && (formType === FORM_TYPE.add || formType === FORM_TYPE.edit)
  const profileForm = 
  instance === FORM_INSTANCE.profile && (formType === FORM_TYPE.add || formType === FORM_TYPE.edit)
  const deletePage = 
  (instance === FORM_INSTANCE.page || instance === FORM_INSTANCE.item ) && formType === FORM_TYPE.delete

  switch(true){
    case pageForms: return <PageForm {...props} />
    case profileForm: return <ProfileForm {...props} />
    case deletePage: return <DeleteForm {...props} />
    default: return <ProfileForm {...props} />
  }
  

 
};

export default FormContainer;