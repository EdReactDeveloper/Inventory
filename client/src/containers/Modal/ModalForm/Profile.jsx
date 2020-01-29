import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileForm from '../../../components/Modal/From/Profile';
import { updateProfileAction } from '../../../store/actions/profile';
import { modalHandler } from '../../../store/actions/modal';
import { FORM_TYPE } from '../../../configs';
import { isRequired } from '../../../validators';


const FormContainer = (props) => {
  const dispatch = useDispatch()
  const { formType } = useSelector(state => state.modal.form)
  const { profile, profileLoading } = useSelector(state => state.profile)

  const [required, setRequired] = useState({
    name: null
  })

  const [state, setState] = useState({
    name: '',
    hidden: false,
    description: ''
  })

  // initialize form
  useEffect(() => {
    if (formType === FORM_TYPE.edit) {
      setState({ ...state, ...profile })
    }
  }, [formType])

  // update field
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
    setRequired({ ...required, [e.target.name]: null })
  }

  // update checkbox
  const changeCheckBox = (e) => {
    setState({ ...state, [e.target.name]: !state.hidden })
  }

  // send form
  const submitFrom = (e) => {
    e.preventDefault()
    const fields = isRequired(state, required)
    setRequired({ ...required, ...fields })
    if (fields.valid) {
      const { profileUpdating } = profile
      switch (formType) {
        case FORM_TYPE.add: dispatch(updateProfileAction(state)); break;
        case FORM_TYPE.edit: dispatch(updateProfileAction(state)); break;
        default: dispatch(modalHandler()); break;
      }
      setTimeout(() => {
        if (!profileUpdating) {
          dispatch(modalHandler())
        }
      }, 100)
    }
  }


  // render form
  return <ProfileForm
    changeCheckBox={changeCheckBox}
    onChange={onChange}
    submitFrom={submitFrom}
    profile={state}
    profileLoading={profileLoading}
    required={required}
    {...props}
  />

};

export default FormContainer;