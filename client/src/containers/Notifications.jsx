import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import Notifications from '../components/Notifications';
import MemoNotes from '../components/Notifications/MemoNotes'; 
import {selectItemAction} from '../store/actions/items'; 

const NotificationsContainer = () => {
  const dispatch=useDispatch()
  const notifications = useSelector(state => state.notification)
  const {selectedItems} = useSelector(state => state.items)
  
  const selectItemHandler=(payload)=>{
    dispatch(selectItemAction(payload))
  }

  const memoNotes = {
    selectItemHandler,
    selectedItems
  }

  return (
    <>
  <Notifications notifications={notifications}/>
  {selectedItems.length > 0 && <MemoNotes {...memoNotes}/>}
  </>
  )
};

export default NotificationsContainer;