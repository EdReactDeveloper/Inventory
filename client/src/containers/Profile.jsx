import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Profile from '../components/Profile'; 
import {getProfileAction, getItemsAction} from '../store/actions/profile'; 

const extractId = (path) =>{
  return path.split('/').slice(-1).join('')
}

const ProfileContainer = (props) => {
  const dispatch = useDispatch(); 
  const profile = useSelector(state=> state.profile) 
  const items = useSelector(state=>state.items)
  const {data, itemsLoading} = items
  const {profileLoading} = profile

  const path = props.location.pathname
  
  useEffect(() => {
    dispatch(getProfileAction());   
    }, [])
    
  useEffect(()=>{
      const parentId = extractId(path)
      dispatch(getItemsAction(parentId))
  }, [path])  

  

  

return <div>{!profileLoading ? <Profile {...props} items={data} loading={profileLoading} loding={itemsLoading} /> : <div>loading...</div>}</div>
};

export default ProfileContainer;