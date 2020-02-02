import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import Main from '../components/Main';
import {getProfileAction,removeProfileAction} from '../store/actions/profile'; 

const MainContainer = (props) => {
  const dispatch = useDispatch()
const {profile, profileLoading} = useSelector(state => state.profile)
const { history } = props

useEffect(() => {
  dispatch(getProfileAction())
}, [])

const removeProfileHandler = ({id}) =>{
  dispatch(removeProfileAction({id, history}))
}

  const payload = {
    data: {profile},
    loaders: {
      profileLoading
    },
    methods:{
      removeProfileHandler
    }
  } 

  return <Main {...props} {...payload} />
};

export default MainContainer;