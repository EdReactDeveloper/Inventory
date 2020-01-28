import React from 'react';
import style from './profile.module.scss';
import Button from '../misc/Elements/Button';

const ButtonsBlock = ({ editData, id, path, removeItem }) => {
  return (
    <div className={style.btnBlock}>
      <Button type="edit" editData={editData}>edit</Button>
      <Button type="delete" onClick={() => removeItem({ id, path })}>remove</Button>
    </div>
  );
};

export default ButtonsBlock;