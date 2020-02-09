import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Profile from '../components/Profile';
import { getProfileAction, componentUnmount, removeProfileAction } from '../store/actions/profile';
import { getItemsAction, removeItemAction, selectItemAction, moveItemsAction, removePageAction } from '../store/actions/items';
import Loader from '../components/Profile/Loader';
import setAlert from '../store/actions/alerts';
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
  const { history } = props
  const { match: { params: { id } } } = props
  const isProfilePage = id === profile._id
  const isItemPage = id === page._id

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
    const { type, id, parentId } = payload
    switch (type) {
      case 'page': dispatch(removePageAction({ id, parentId, history })); break;
      case 'item': dispatch(removeItemAction({ id })); break;
      case 'profile': dispatch(removeProfileAction({ id, history })); break;
      default: dispatch(setAlert('nothing to remove', 'danger'))
    }

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
      removeItem,
      selectItemHandler,
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