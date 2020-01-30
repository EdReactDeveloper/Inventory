import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../components/Profile';
import { getProfileAction, componentUnmount } from '../store/actions/profile';
import { getItemsAction, removeItemAction, selectItemAction } from '../store/actions/items';
import Loader from '../components/Profile/Loader';

const extractId = (path) => {
  return path.split('/').slice(-1).join('')
}

const profilePage = (location) => {
  return location.split('/').length === 2
}

const ProfileContainer = (props) => {
  const dispatch = useDispatch();

  // reducers
  const profile = useSelector(state => state.profile)
  const items = useSelector(state => state.items)
  const { data, page, itemsLoading, fetchingItem, pageLoading, editMode, selectedItems } = items
  const {inProgress} = useSelector(state=> state.inProgress)

  // props
  const path = props.location.pathname
  const {history} = props
  const isProfilePage = profilePage(path)


  useEffect(() => {
    dispatch(getProfileAction());
  }, [])

  useEffect(() => {
    const parentId = extractId(path)
    dispatch(getItemsAction(parentId))

  }, [path])

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

  const payload = {
    items: data,
    page,
    editMode,
    profile,
    itemsLoading,
    fetchingItem,
    pageLoading,
    isProfilePage,
    removeItem,
    inProgress,
    selectItemHandler,
    selectedItems
  }

  return <>{profile.profileLoading && itemsLoading ? <Loader /> : <Profile {...props} {...payload} />}</>

};

export default ProfileContainer;