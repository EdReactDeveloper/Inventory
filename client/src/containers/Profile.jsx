import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Profile from '../components/Profile'; 
import {getProfileAction, componentUnmount} from '../store/actions/profile'; 
import {getItemsAction} from '../store/actions/items';

const extractId = (path) =>{
  return path.split('/').slice(-1).join('')
}

const ProfileContainer = (props) => {
  const dispatch = useDispatch(); 
  const profile = useSelector(state=> state.profile) 
  const items = useSelector(state=>state.items)
  const {data, page, itemsLoading, fetchingItem} = items

  const path = props.location.pathname
  useEffect(() => {
    dispatch(getProfileAction());   
    }, [])
    
  useEffect(()=>{
      
    const parentId = extractId(path)
      dispatch(getItemsAction(parentId))
      
  }, [path])  

  useEffect(() => {
    return () => {
      dispatch(componentUnmount())
    };
  }, [])

  
const payload={
  items: data, 
  page, 
  profile,
  itemsLoading,
  fetchingItem
}

return <>{profile.profileLoading && itemsLoading ? <div>loading...</div> : <Profile {...props} {...payload}  /> }</>
};

export default ProfileContainer;