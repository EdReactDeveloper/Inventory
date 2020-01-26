import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getBreadCrumbsAction} from '../store/actions/bread'; 
import BreadCrumbs from '../components/Profile/BreadCrumbs'; 
import mapBreadSelector from '../store/selectors/bread'; 

const BreadCrumbsContainer = (props) => {
  const dispatch = useDispatch()
  const bread = useSelector(state => mapBreadSelector(state))
  const profile = useSelector(state => state.profile.data)
  const getPages = () =>{
    const path = props.location.pathname
    const result = path.trim().split('/') 
    const array = []
    for(let i = 0; i < result.length; i++){
      if(result[i].length>1){
        array.push(result[i])
      }
    }
    return array
  }


  useEffect(() => {
    dispatch(getBreadCrumbsAction(getPages()))    
  }, [props.location.pathname])
  return <BreadCrumbs {...props} items={bread} profile={profile} />
};

export default BreadCrumbsContainer;