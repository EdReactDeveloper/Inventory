import React from 'react';
import Button from '../../misc/Elements/Button';
import Menu from '../../Menu';
import { FORM_INSTANCE } from '../../../configs';

const Buttons = (props) => {

  const { data: { page } } = props

  const { _id, parentId, name } = page
  const instance = parentId ? FORM_INSTANCE.page : FORM_INSTANCE.profile
  return (
    <div>
      <Menu>
        <li>
          <Button type="edit" page={page} payload={{ instance }}>edit this item</Button>
        </li>
        <li>
          <Button type="delete"
            payload={{ id: _id, parentId, instance, name }}>remove</Button>
        </li>
      </Menu>
    </div>
  );
};

export default Buttons;  