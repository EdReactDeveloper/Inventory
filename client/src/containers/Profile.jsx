import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../components/Profile';
import { getProfileAction, componentUnmount } from '../store/actions/profile';
import { getItemsAction, removeItemAction, selectItemAction, moveItemsAction } from '../store/actions/items';
import Loader from '../components/Profile/Loader';


const ProfileContainer = (props) => {
  const dispatch = useDispatch();

  // reducers
  const profile = useSelector(state => state.profile)
  const items = useSelector(state => state.items)
  const { data, page, bread, itemsLoading, fetchingItem, pageLoading, editMode, selectedItems } = items
  const {inProgress} = useSelector(state=> state.inProgress)

  // props
  const {history} = props
  const {match: {params: {id}}} = props


  useEffect(() => {
    dispatch(getProfileAction());
  }, [])

  useEffect(() => {
    dispatch(getItemsAction(id))

  }, [id])

  useEffect(() => {
    return () => {
      dispatch(componentUnmount())
    };
  }, [])

  // methods
  const removeItem = (payload) =>{
    dispatch(removeItemAction({...payload, history}))
  }

  const selectItemHandler=(payload)=>{
    dispatch(selectItemAction(payload))
  }

  const moveItemsHandler = (payload)=>{
    // payload = 
    dispatch(moveItemsAction(payload))
  }

  const payload = {
    items: data,
    page,
    editMode,
    profile,
    itemsLoading,
    fetchingItem,
    pageLoading,
    removeItem,
    inProgress,
    selectItemHandler,
    selectedItems,
    moveItemsHandler,
    bread
  }

  return <>{profile.profileLoading && itemsLoading ? <Loader /> : <Profile {...props} {...payload} />}</>

};

export default ProfileContainer;