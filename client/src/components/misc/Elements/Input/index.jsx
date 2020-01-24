import React from 'react';
import styles from './Input.module.scss'; 

const Input = ({meta, input, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={hasError ? styles.error : ''}>
      <input  {...input} {...props} />
      { hasError && <span>{meta.error}</span>}
    </div>
  );
};

export default Input;