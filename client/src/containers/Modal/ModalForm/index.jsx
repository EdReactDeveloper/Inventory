import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../components/Modal/From/Add'; 
import {addItemAction } from '../../../store/actions/profile'; 

const statusArray = [
  {name: 'away', value: 'away'},
  {name: 'inplace', value: 'inplace'},
]
const FormContainer = (props) => {
  const dispatch = useDispatch()
  const url = props.location.pathname

  const [state, setState] = useState({
    name: 'edward', 
    description: 'desription ', 
    tags: 'tag1 tag2',  
    location: 'drawer', 
    category: 'medicine', 
    checked: false, 
    shared: false, 
    sharedWith: [], 
    count: 1, 
    type: 'some type', 
    status: 'away', 
    img: ''
  })

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
      collectionId = url.split('/')[0].join('')
    }

    
    dispatch(addItemAction({...state, path: url, 
      parentId: url.split('/').slice(-1).join(''), 
      collectionId}))
  
  }
  return <Form onChange={onChange} {...state} submitFrom={submitFrom} statusArray={statusArray} changeCheckBox={changeCheckBox}/>
};

export default FormContainer;