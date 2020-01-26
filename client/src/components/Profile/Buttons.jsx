import React from 'react';
import Button from '../misc/Elements/Button';

const Buttons = ({page, profile}) => {
  return (
    <div>
      <Button type="add" > add item</Button>
      <Button type="edit" payload={{ page, profile }}>edit</Button>
    </div>
  );
};

export default Buttons;