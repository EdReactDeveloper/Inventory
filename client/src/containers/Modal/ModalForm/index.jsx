import React, {useState, useEffect} from 'react';
import Form from '../../../components/Modal/From/Add'; 
import { useDispatch } from 'react-redux';

const statusArray = [
  {name: 'away', value: 'away'},
  {name: 'inplace', value: 'inplace'},
]
const FormContainer = () => {
  const dispatch = useDispatch
  const [state, setState] = useState({
    name: '',
    description: '',
    tags: '', 
    category: '',
    status: '', 
    count: 0, 
    location: '', 
    type: '',
    shared: false
  })

  useEffect(()=>{
    console.log(state)
  },[])

  const onChange = (e)=>{
    setState({...state, [e.target.name]: e.target.value})
  }

  const changeCheckBox = (e)=>{
    setState({...state, [e.target.name]: !e.target.value})
  }

  const submitFrom = (e)=>{
    e.preventDefault()
    
    
  }
  return <Form onChange={onChange} {...state} submitFrom={submitFrom} statusArray={statusArray} changeCheckBox={changeCheckBox}/>
};

export default FormContainer;