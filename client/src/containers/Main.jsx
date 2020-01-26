import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import Main from '../components/Main';
import {getProfileAction} from '../store/actions/profile'; 

const MainContainer = (props) => {
  const dispatch = useDispatch()
const {profile} = useSelector(state => state.profile)

useEffect(() => {
  dispatch(getProfileAction())
}, [])

  return <Main {...props} id={profile._id} />
};

export default MainContainer;