import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../components/Profile';
import { getProfileAction, componentUnmount } from '../store/actions/profile';
import { getItemsAction, removeItemAction, selectItemAction, moveItemsAction } from '../store/actions/items';
import Loader from '../components/Profile/Loader';


const ProfileContainer = (props) => {
  const dispatch = useDispatch();

  // reducers
  const {profile, profileLoading, profileUpdating} = useSelector(state => state.profile)
  const items = useSelector(state => state.items)
  const { list, page, bread, itemsLoading, fetchingItem, pageLoading, editMode, selectedItems } = items
  const { inProgress } = useSelector(state => state.inProgress)

  // props
  const { history } = props
  const { match: { params: { id } } } = props
  const isProfilePage = id === profile._id

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
  const removeItem = (payload) => {
    dispatch(removeItemAction({ ...payload, history }))
  }

  const selectItemHandler = (payload) => {
    dispatch(selectItemAction(payload))
  }

  const moveItemsHandler = (payload) => {
    // payload = 
    dispatch(moveItemsAction(payload))
  }

  const payload = {
    data: {
      profile,
      list,
      page,
      bread
    },
    loaders: {
      itemsLoading,
      fetchingItem,
      pageLoading,
      inProgress,
    },
    methods:{
      removeItem,
      selectItemHandler,
      selectedItems,
      moveItemsHandler,
      profileLoading,
      profileUpdating
    },
    checks: {
      isProfilePage,
      editMode
    }   
  }

  return <>{profile.profileLoading && itemsLoading ? <Loader /> : <Profile {...props} {...payload} />}</>

};

export default ProfileContainer;