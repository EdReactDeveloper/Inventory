import React from 'react';
import Button from '../../misc/Elements/Button';
import Menu from '../../Menu';

const Buttons = ({ editData, id, parentId, removeItem }) => {
  const type = parentId ? 'page' : 'profile'
  return (
    <div>
      <Menu>
        <li>
          <Button type="delete" onClick={() => removeItem({ id, type, parentId })}>remove</Button>
        </li>
        <li>
        <Button type="edit" editData={editData}>edit this item</Button>
        </li>
      </Menu>
    </div>
  );
};

export default Buttons;  