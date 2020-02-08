import React from 'react';
import { useSelector } from 'react-redux';
import DeleteForm from './Delete'; 
import { FORM_TYPE } from '../../../configs';

const FormContainer = (props) => {

  const { formType } = useSelector(state => state.modal.form)

  // CONDITIONS
  const deletePage = 
  formType === FORM_TYPE.delete

  switch(true){
    case deletePage: return <DeleteForm {...props} />
  }
  

 
};

export default FormContainer;