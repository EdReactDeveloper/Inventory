import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/Form/Page';
import { addItemAction, updateItemAction } from '../../store/actions/items';
import { formHandler } from '../../store/actions/form';
import { FORM_TYPE, STATUSES } from '../../configs';
import { isRequired } from '../../validators';
import { fileUploadAction, removeFileAction } from '../../store/actions/upload';

const FormContainer = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const { fetchingItem, pageLoading, page } = items
  const { filePath, isUploading } = useSelector(state => state.upload)
  const { formType } = useSelector(state => state.form)
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

  const uploadFile = (e, file) => {
    e.preventDefault()
    const { img } = state
    const formData = new FormData()
    formData.append('file', file)
    dispatch(fileUploadAction(formData, setUploadPersentage))
    // if (img) {
    //   dispatch(removeFileAction(img))
    // }
  }

  const removeFile = () => {
    const { img } = state
    dispatch(removeFileAction(img))
  }

  // send form
  const submitFrom = (e) => {
    e.preventDefault()
    const fields = isRequired(state, required)
    setRequired({ ...required, ...fields })

    if (fields.valid) {
    
      switch (formType) {
        case FORM_TYPE.add: dispatch(addItemAction({
          ...state, img: filePath,
          parentId: pathname.split('/').slice(-1).join('')
        }));
          setTimeout(() => {
            if (!fetchingItem) {
              dispatch(formHandler())
            }
          }, 100);
          break;
        case FORM_TYPE.edit: dispatch(updateItemAction({ ...state, img: filePath }));
          setTimeout(() => {
            if (!pageLoading) {
              dispatch(formHandler())
            }
          }, 100);
          break;
        default: dispatch(formHandler()); break;
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
      uploadFile,
      removeFile
    },
    loaders: {
      fetchingItem,
      isUploading
    },
    checks: {
      required,
      formType
    }
  }

  return <Form
    {...payload}
  />
};

export default FormContainer;