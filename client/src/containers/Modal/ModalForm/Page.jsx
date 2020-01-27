import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../components/Modal/From/Add';
import { addItemAction, updateItemAction } from '../../../store/actions/items';
import { modalHandler } from '../../../store/actions/modal';
import { FORM_TYPE } from '../../../components/misc/configs';

const statusArray = [
  { name: 'away', value: 'away' },
  { name: 'inplace', value: 'inplace' },
]

const FormContainer = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const { itemsLoading, fetchingItem, pageLoading, page } = items
  const { formType } = useSelector(state => state.modal.form)
  const { location: { pathname } } = props

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

  // initialize form
  useEffect(() => {
    if (formType === FORM_TYPE.edit) {
      setState({ ...state, ...page })
    }
  }, [formType])
  // update field
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  // update checkbox
  const changeCheckBox = (e) => {
    setState({ ...state, [e.target.name]: !state.shared })
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

    switch (formType) {
      case FORM_TYPE.add: dispatch(addItemAction({
        ...state, path: pathname,
        parentId: pathname.split('/').slice(-1).join(''),
        collectionId
      }));
        setTimeout(() => {
          if (!fetchingItem) {
            dispatch(modalHandler())
          }
        }, 100);
        break;
      case FORM_TYPE.edit: dispatch(updateItemAction(state));
        setTimeout(() => {
          if (!pageLoading) {
            dispatch(modalHandler())
          }
        }, 100);
        break;
      default: dispatch(modalHandler()); break;
    }


  }


  // render form

  return <Form
    onChange={onChange} {...state}
    submitFrom={submitFrom}
    statusArray={statusArray}
    changeCheckBox={changeCheckBox}
    fetchingItem={itemsLoading} />
};

export default FormContainer;