import React from 'react';
import style from './notifications.module.scss';

const Notification = ({ notifications }) => {

  if (notifications.notes !== null && notifications.notes.length > 0) {
    return <div className={style.notification__container}>
      {notifications.notes.map(note => {
        return (
          <div key={note}
            className={`
              ${style.notification__wrapper}
              ${notifications.move.some(id => id === note) ? '' : style.notification__hide}
              `}>
            {notifications.msg}
          </div>
        );
      })
      }</div>

  }
  return null
}



export default Notification;