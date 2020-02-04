import React from 'react';
import Button from '../../misc/Elements/Button';
import Menu from '../../Menu';
import { FORM_INSTANCE } from '../../../configs';

const Buttons = ({ editData, id, parentId }) => {

  const instance = parentId ? FORM_INSTANCE.page : FORM_INSTANCE.profile

  return (
    <div>
      <Menu>
        <li>
          <Button type="delete"
          payload={{id, parentId, instance}}>remove</Button>
        </li>
        <li>
          <Button type="edit" data={editData} payload={{ instance }}>edit this item</Button>
        </li>
      </Menu>
    </div>
  );
};

export default Buttons;  