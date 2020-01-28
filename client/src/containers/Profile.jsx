import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../components/Profile';
import { getProfileAction, componentUnmount } from '../store/actions/profile';
import { getItemsAction } from '../store/actions/items';
import Loader from '../components/Profile/Loader';

const extractId = (path) => {
  return path.split('/').slice(-1).join('')
}

const profilePage = (location) => {
  return location.split('/').length === 2
}

const ProfileContainer = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile)
  const items = useSelector(state => state.items)
  const { data, page, itemsLoading, fetchingItem, pageLoading } = items
  const path = props.location.pathname

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


  const payload = {
    items: data,
    page,
    profile,
    itemsLoading,
    fetchingItem,
    pageLoading,
    isProfilePage
  }

  return <>{profile.profileLoading && itemsLoading ? <Loader /> : <Profile {...props} {...payload} />}</>

};

export default ProfileContainer;