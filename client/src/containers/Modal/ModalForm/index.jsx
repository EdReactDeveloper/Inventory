import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../components/Modal/From/Add'; 
import {addItemAction, updateItemAction } from '../../../store/actions/profile'; 
import {modalHandler} from '../../../store/actions/modal'; 
import {FORM_TYPE} from '../../../components/misc/configs'; 

const statusArray = [
  {name: 'away', value: 'away'},
  {name: 'inplace', value: 'inplace'},
]
const FormContainer = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state=> state.items)
  const {itemsLoading, page} = items
const {formType} = useSelector(state=> state.modal.form)
  const {location: {pathname}} = props

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

  useEffect(() => {
    if(formType === FORM_TYPE.edit && page){
      setState({...state, ...page})
    }
  }, [formType])

  const onChange = (e)=>{
    setState({...state, [e.target.name]: e.target.value})
  }

  const changeCheckBox = (e)=>{
    setState({...state, [e.target.name]: !state.shared})
  }
  

  const submitFrom = (e)=>{
    e.preventDefault()
    const {path} = props.match
    let collectionId = ''

    if(path.length < 2){
      collectionId = state.name
    }else {
      collectionId = pathname.split('/')[0].join('')
    }

    switch(formType){
      case FORM_TYPE.add: dispatch(addItemAction({...state, path: pathname, 
      parentId: pathname.split('/').slice(-1).join(''), 
      collectionId})); break; 
      case FORM_TYPE.edit: dispatch(updateItemAction(state));break;
      default: dispatch(modalHandler()); break;
    }
    
    setTimeout(()=>{
      if(!itemsLoading){
        dispatch(modalHandler())
      } 
    }, 100)
  
  }
  return <Form onChange={onChange} {...state} 
  submitFrom={submitFrom} 
  statusArray={statusArray} 
  changeCheckBox={changeCheckBox} 
  fetchingItem={itemsLoading}/>
};

export default FormContainer;