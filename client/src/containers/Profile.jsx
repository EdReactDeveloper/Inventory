import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Profile from '../components/Profile';
import { getProfileAction, componentUnmount} from '../store/actions/profile';
import { getItemsAction, moveItemsAction} from '../store/actions/items';
import {formHandler} from '../store/actions/form'; 

import Loader from '../components/Profile/Loader';
import NotFound from '../components/404';

const ProfileContainer = (props) => {
  const dispatch = useDispatch();

  // reducers
  const { profile, profileLoading, profileUpdating } = useSelector(state => state.profile)
  const items = useSelector(state => state.items)
  const { list, page, bread, itemsLoading, fetchingItem, pageLoading, selectedItems } = items
  const { inProgress } = useSelector(state => state.inProgress)
  const { formType } = useSelector(state => state.form);
 
  // props
  const { match: { params: { id } } } = props
  const isProfilePage = id === profile._id
  const isItemPage = id === page._id

  useEffect(() => {
    dispatch(getProfileAction());
  }, [])

  useEffect(() => {
    dispatch(getItemsAction(id))
    if(formType){
      dispatch(formHandler())
    }
  }, [id])

  useEffect(() => {
    return () => {
      dispatch(componentUnmount())
    };
  }, [])

  const moveItemsHandler = (payload) => {
    dispatch(moveItemsAction(payload))
  }

  const payload = {
    data: {
      profile,
      list,
      page,
      bread,
      selectedItems
    },
    loaders: {
      itemsLoading,
      fetchingItem,
      pageLoading,
      inProgress,
      profileLoading,
      profileUpdating
    },
    methods: {
      moveItemsHandler,
    },
    checks: {
      isProfilePage,
      isItemPage,
      formType
    }
  }

  switch (true) {
    case profile.removed: return <Redirect to='/' />
    case isProfilePage || isItemPage: return <Profile {...props} {...payload} />
    case profileLoading || itemsLoading: return <Loader />;
    default: return <NotFound {...props} />
  }


};

export default ProfileContainer;