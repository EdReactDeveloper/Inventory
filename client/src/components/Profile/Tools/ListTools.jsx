import React from 'react';
import Button from '../../misc/Elements/Button';
import style from './tools.module.scss';

const ListTools = (props) => {
  const {
    data: { page, selectedItems },
    methods: { moveItemsHandler,
    }
  } = props
  const numberOfItems = selectedItems.length
  const isInside = selectedItems.some(item => item.parentId === page._id)
  return (
    <div className={style.listTools}>
      <Button type="add" > add item</Button>
      {!isInside && numberOfItems ? <Button type="move" onClick={() => moveItemsHandler({ id: page._id, items: selectedItems })}>
        {numberOfItems ?
          <>insert ({numberOfItems})</>
          :
          <>no items selected</>
        }
      </Button> : <></>}
    </div>
  );
};

export default ListTools;