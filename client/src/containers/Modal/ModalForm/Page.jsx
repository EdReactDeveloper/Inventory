import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../components/Modal/From/Page';
import { addItemAction, updateItemAction } from '../../../store/actions/items';
import { modalHandler } from '../../../store/actions/modal';
import { FORM_TYPE, STATUSES } from '../../../configs';
import { isRequired } from '../../../validators';
import {fileUploadAction} from '../../../store/actions/upload'; 

const FormContainer = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const { itemsLoading, fetchingItem, pageLoading, page } = items
  const {filePath, filename, isUploading} = useSelector(state => state.upload) 
  const { formType } = useSelector(state => state.modal.form)
  const { location: { pathname } } = props
  const [uploadPersentage, setUploadPersentage] = useState()
  const [required, setRequired] = useState({
    name: null,
    tags: null,
    count: null
  })

  const [state, setState] = useState({
    name: '',
    description: '',
    tags: '',
    location: '',
    category: '',
    checked: false,
    shared: false,
    sharedWith: [],
    count: 1,
    type: '',
    status: 'inplace',
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
    setRequired({ ...required, [e.target.name]: null })
  }

  // update checkbox
  const changeCheckBox = (e) => {
    setState({ ...state, [e.target.name]: !state.shared })
  }

  const uploadFile = (e, file) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    dispatch(fileUploadAction(formData, setUploadPersentage))
  }

  // send form
  const submitFrom = (e) => {
    e.preventDefault()
    const fields = isRequired(state, required)
    setRequired({ ...required, ...fields })

    if (fields.valid) {
      const { path } = props.match
      let collectionId = ''

      if (path.length < 2) {
        collectionId = state.name
      } else {
        collectionId = pathname.split('/')[0].join('')
      }

      switch (formType) {
        case FORM_TYPE.add: dispatch(addItemAction({
          ...state, img: filePath,
          parentId: pathname.split('/').slice(-1).join(''),
          collectionId
        }));
          setTimeout(() => {
            if (!fetchingItem) {
              dispatch(modalHandler())
            }
          }, 100);
          break;
        case FORM_TYPE.edit: dispatch(updateItemAction({...state, img: filePath}));
          setTimeout(() => {
            if (!pageLoading) {
              dispatch(modalHandler())
            }
          }, 100);
          break;
        default: dispatch(modalHandler()); break;
      }
    }

  }

  // render form

  const payload = {
    data: {
      state,
      statusArray: STATUSES,
      uploadPersentage,
      filePath,
    },
    methods: {
      onChange,
      submitFrom,
      changeCheckBox,
      uploadFile
    },
    loaders: {
      fetchingItem,
      isUploading
    },
    checks: {
      required
    }
  }

  return <Form
    {...payload}
  />
};

export default FormContainer;