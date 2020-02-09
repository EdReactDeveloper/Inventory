import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/Form/Page';
import { addItemAction, updateItemAction } from '../../store/actions/items';
import { formHandler, fileUploadAction, removeFileAction } from '../../store/actions/form';
import { FORM_TYPE, STATUSES } from '../../configs';
import { isRequired } from '../../validators';

const FormContainer = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const { fetchingItem, pageLoading } = items
  const { profile } = useSelector(state => state.profile)
  const { formType, data, filePath, isUploading } = useSelector(state => state.form)
  const { location: { pathname } } = props
  const [uploadPersentage, setUploadPersentage] = useState()
  const [file, setFile] = useState()
  const [filename, setFilename] = useState()
  const [required, setRequired] = useState({
    name: null,
    tags: null,
    count: null
  })

  const [state, setState] = useState({
    name: '',
    _id: null,
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
      setState({ ...state, ...data })
      setFilename(data.img)
    }
    if (formType === FORM_TYPE.add) {
      console.log('add')
    }
  }, [formType])

  useEffect(() => {
    if (filePath) {
      setFilename(filePath)
    }

  }, [filePath])


  // REMOVE IMG 
  // useEffect(()=>{
  //   if(formType === FORM_TYPE.add){
  //     console.log(state)
  //   }
  // }, [formHandler])

  // update field
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
    setRequired({ ...required, [e.target.name]: null })
  }

  // update checkbox
  const changeCheckBox = (e) => {
    setState({ ...state, [e.target.name]: !state.shared })
  }

  // SELECT FILE
  const selectImageHandler = (e) => {
    setFile(e.target.files[0])
  }

  // UPLOAD FILE
  const uploadFile = (e, file) => {
    e.preventDefault()
    let id = state._id

    // if item doesnt exist (adding): create temp file upload
    if (!id) {
      const temp = 'TEMP'
      id = temp + profile._id
      const extension = file.name.match(/\.(gif|jpg|jpeg|tiff|png)$/i)[0]
      setFilename(id + extension)
    }

    const formData = new FormData()
    formData.append('file', file)
    dispatch(fileUploadAction({ formData, setUploadPersentage, id, formType }))
  }


  const removeFile = () => {
    const { img } = state
    if (img) {
      dispatch(removeFileAction(img))
    }
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
      file,
      filename
    },
    methods: {
      onChange,
      submitFrom,
      changeCheckBox,
      uploadFile,
      removeFile,
      selectImageHandler
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