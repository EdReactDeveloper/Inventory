import React from 'react';
import style from './profile.module.scss';
import Button from '../misc/Elements/Button';
import Menu from '../Menu';

const ButtonsBlock = ({ editData, id, path, removeItem, moveItemsHandler, editMode, selectedItems }) => {
  const numberOfItems = selectedItems.length
  return (
    <div>
      <Menu>
        <li>
          <Button type="delete" onClick={() => removeItem({ id, path })}>remove</Button>
        </li>
        <li>
          <Button type="move" onClick={() => moveItemsHandler({ id, items: selectedItems, path })}>move ({numberOfItems}) here</Button>
        </li>
        <Button type="editAll" >move items</Button>
        <li>
        <Button type="edit" editData={editData}>edit this item</Button>
        </li>
      </Menu>
      {/* {editMode &&
        <div className={style.btnBlock}>
          <Button type="edit" editData={editData}>edit</Button>
          {selectedItems.length > 0 &&
            <Button type="move" onClick={()=>moveItemsHandler({id, items: selectedItems, path})}>move ({numberOfItems}) here</Button>
          }
          <Button type="delete" onClick={() => removeItem({ id, path })}>remove</Button>
        </div>
      } */}
    </div>
  );
};

export default ButtonsBlock;  