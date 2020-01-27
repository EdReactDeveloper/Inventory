import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../components/Modal/From/Add';
import ProfileForm from '../../../components/Modal/From/Profile';
import { addItemAction, updateItemAction } from '../../../store/actions/items';
import { updateProfileAction } from '../../../store/actions/profile';
import { modalHandler } from '../../../store/actions/modal';
import { FORM_TYPE } from '../../../components/misc/configs';

const statusArray = [
  { name: 'away', value: 'away' },
  { name: 'inplace', value: 'inplace' },
]

const FormContainer = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const { itemsLoading, page } = items
  const { formType } = useSelector(state => state.modal.form)
  const { location: { pathname } } = props
  const { profile, profileLoading } = useSelector(state => state.profile)

  const [state, setState] = useState({
    name: '',
    description: ' ',
    tags: '',
    location: '',
    category: '',
    checked: false,
    shared: false,
    sharedWith: [],
    count: 1,
    type: '',
    status: 'away',
    img: ''
  })

  const [profileState, setProfile] = useState({
    name: '',
    hidden: false,
    description: ''
  })

  // initialize form
  useEffect(() => {
    if (formType === FORM_TYPE.edit) {
      if (page) {
        setState({ ...state, ...page })
      } else {
        setProfile({ ...profileState, ...profile })
      }
    }
  }, [formType])
  // update field
  const onChange = (e) => {
    if (page) {
      setState({ ...state, [e.target.name]: e.target.value })
    } else {
      setProfile({ ...profileState, [e.target.name]: e.target.value })
    }
  }

  // update checkbox
  const changeCheckBox = (e) => {
    if (page) {
      setState({ ...state, [e.target.name]: !state.shared })
    } else {
      setProfile({ ...profileState, [e.target.name]: !profileState.hidden })
    }
  }

  // send form
  const submitFrom = (e) => {
    e.preventDefault()
    const { path } = props.match
    let collectionId = ''

    if (path.length < 2) {
      collectionId = state.name
    } else {
      collectionId = pathname.split('/')[0].join('')
    }
    if (page) {

      switch (formType) {
        case FORM_TYPE.add: dispatch(addItemAction({
          ...state, path: pathname,
          parentId: pathname.split('/').slice(-1).join(''),
          collectionId
        })); break;
        case FORM_TYPE.edit: dispatch(updateItemAction(state)); break;
        default: dispatch(modalHandler()); break;
      }

      setTimeout(() => {
        if (!itemsLoading) {
          dispatch(modalHandler())
        }
      }, 100)
    } else {
      switch (formType) {
        case FORM_TYPE.add: dispatch(updateProfileAction(profileState)); break;
        case FORM_TYPE.edit: dispatch(updateProfileAction(profileState)); break;
        default: dispatch(modalHandler()); break;
      }
    }

  }


// render form
  if (formType === FORM_TYPE.edit && !page) {
    return <ProfileForm
      changeCheckBox={changeCheckBox}
      onChange={onChange}
      submitFrom={submitFrom}
      profile={profileState}
      profileLoading={profileLoading}
    />
  }
    
  return <Form
    onChange={onChange} {...state}
    submitFrom={submitFrom}
    statusArray={statusArray}
    changeCheckBox={changeCheckBox}
    fetchingItem={itemsLoading} />

};

export default FormContainer;