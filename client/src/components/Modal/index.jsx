import React from 'react';
import style from './Modal.module.scss';

const Modal = ({ modalHandler, children, isOpen }) => {
  return <div>
    {isOpen && <>
      <input type="button" className={style.background} onClick={() => modalHandler()} />
      <div className={style.content}>
        {children}
      </div>
    </>
    }
  </div>
}

export default Modal;