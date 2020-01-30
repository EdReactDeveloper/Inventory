import React from 'react';
import style from './profile.module.scss';
import Button from '../misc/Elements/Button';

const ButtonsBlock = ({ editData, id, path, removeItem, editMode }) => {
  return (
    <div>
      <Button type="editAll" >move items</Button>
      {editMode &&
        <div className={style.btnBlock}>
          <Button type="edit" editData={editData}>edit</Button>
          <Button type="delete" onClick={() => removeItem({ id, path })}>remove</Button>
        </div>
      }
    </div>
  );
};

export default ButtonsBlock;  