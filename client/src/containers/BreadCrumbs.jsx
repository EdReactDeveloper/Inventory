import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getBreadCrumbsAction} from '../store/actions/bread'; 
import BreadCrumbs from '../components/Profile/BreadCrumbs'; 
import mapBreadSelector from '../store/selectors/bread'; 

const BreadCrumbsContainer = (props) => {
  const dispatch = useDispatch()
  const {location: {pathname}, bread} = props
 

  useEffect(() => {
    dispatch(getBreadCrumbsAction(getPages()))   

  }, [pathname])
  return <BreadCrumbs {...props} items={bread} />
};

export default BreadCrumbsContainer;