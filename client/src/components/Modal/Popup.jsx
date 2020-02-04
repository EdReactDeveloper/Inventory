import React from 'react';
import style from './Modal.module.scss';

const Popup = (props) => {
  const {children} = props
  return (
    <div className={style.content}>
      {children}
    </div>
  );
};

export default Popup;