import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Profile from '../components/Profile'; 
import {getProfileAction} from '../store/actions/profile'; 
import {getItemsAction} from '../store/actions/items';

const extractId = (path) =>{
  return path.split('/').slice(-1).join('')
}

const ProfileContainer = (props) => {
  const dispatch = useDispatch(); 
  const profile = useSelector(state=> state.profile) 
  const items = useSelector(state=>state.items)
  const {data, page, itemsLoading} = items

  const path = props.location.pathname
  useEffect(() => {
    dispatch(getProfileAction());   
    }, [])
    
  useEffect(()=>{
      
    const parentId = extractId(path)
      dispatch(getItemsAction(parentId))
      
  }, [path])  

  
const payload={
  items: data, 
  page, 
  profile,
  itemsLoading
}


return <>{!profile.profileLoading && payload ? <Profile {...props} {...payload}  /> : <div>loading...</div>}</>
};

export default ProfileContainer;