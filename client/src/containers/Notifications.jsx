import React from 'react';
import {useSelector} from 'react-redux'; 
import Notifications from '../components/Notifications';

const NotificationsContainer = () => {
  const notifications = useSelector(state => state.notification)
  return <Notifications notifications={notifications}/>
};

export default NotificationsContainer;