import React from 'react';
import style from './Alert.module.scss'

const Alert = ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(alert => 
  <div key={alert.id} className={`${style.alert} ${style[alert.status]}`}>
    {alert.msg}
  </div>
  )

export default Alert;