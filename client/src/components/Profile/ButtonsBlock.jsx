import React from 'react';
import style from './profile.module.scss';
import Button from '../misc/Elements/Button';

const ButtonsBlock = ({ editData, id, path, removeItem, moveItemsHandler, editMode, selectedItems }) => {
  const numberOfItems = selectedItems.length
  return (
    <div>
      <Button type="editAll" >move items</Button>
      {editMode &&
        <div className={style.btnBlock}>
          <Button type="edit" editData={editData}>edit</Button>
          {selectedItems.length > 0 &&
            <Button type="move" onClick={()=>moveItemsHandler({id, items: selectedItems, path})}>move ({numberOfItems}) here</Button>
          }
          <Button type="delete" onClick={() => removeItem({ id, path })}>remove</Button>
        </div>
      }
    </div>
  );
};

export default ButtonsBlock;  