import React from 'react';
import Button from '../../misc/Elements/Button';
import Menu from '../../Menu';
import {FORM_INSTANCE} from '../../../configs'; 

const Buttons = ({ editData, id, parentId, removeItem }) => {
  
  const type = parentId ? 'page' : 'profile'
  const instance = parentId ? FORM_INSTANCE.item : FORM_INSTANCE.profile

  return (
    <div>
      <Menu>
        <li>
          <Button type="delete" onClick={() => removeItem({ id, type, parentId })}>remove</Button>
        </li>
        <li>
        <Button type="edit" editData={editData} payload={{instance}}>edit this item</Button>
        </li>
      </Menu>
    </div>
  );
};

export default Buttons;  