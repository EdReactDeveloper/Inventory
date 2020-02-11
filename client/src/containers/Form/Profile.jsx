import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileForm from '../../components/Form/Profile';
import { updateProfileAction, addProfileAction } from '../../store/actions/profile';
import { formHandler } from '../../store/actions/form';
import { FORM_TYPE } from '../../configs';
import { isRequired } from '../../validators';


const FormContainer = (props) => {
  const dispatch = useDispatch()
  const { profile, profileLoading } = useSelector(state => state.profile)
  const { formType, data } = useSelector(state => state.form)
  const { history } = props
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
    setState({ ...state, ...data })
  }, [data])

  // update field
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
    setRequired({ ...required, [e.target.name]: null })
  }

  // update checkbox
  const changeCheckBox = (e) => {
    setState({ ...state, [e.target.name]: !state.hidden })
  }

  // sumbit form
  const submitFormHandler = (e) => {
    e.preventDefault()
    // 1.field validation check
    const fields = isRequired(state, required)
    setRequired({ ...required, ...fields })

    // 2.submit form
    if (fields.valid) {
      switch (formType) {
        case FORM_TYPE.add: dispatch(addProfileAction({ state, history })); break;
        case FORM_TYPE.edit: dispatch(updateProfileAction(state)); break;
        default: dispatch(formHandler()); break;
      }
      dispatch(formHandler())
    }
  }

  const payload = {
    data: {
      state
    },
    methods: {
      changeCheckBox,
      onChange,
      submitFormHandler
    },
    loaders: {
      profileLoading
    },
    checks: {
      required,
      formType
    }
  }

  // render form
  return <ProfileForm
    {...payload}
  />

};

export default FormContainer;