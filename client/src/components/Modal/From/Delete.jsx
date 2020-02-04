import React from 'react';
import Button from '../../misc/Elements/Button';
import style from './Forms.module.scss';

const DeleteForm = (payload) => {
  const {
    data: {
      deleteAll
    },
    methods: {
      removeItem,
      onChangeHandler
    } } = payload

  return (
    <form onSubmit={removeItem} className={style.delete}>
      <div>Remove this item?</div>
      <div className={style.delete__checkbox_wrapper}>
        <input type="checkbox" value={deleteAll} checked={deleteAll} id="deleteAll" name="deleteAll" onChange={(e) => onChangeHandler(e)} />
        <label htmlFor="deleteAll">delete all the content inside?</label>
      </div>
      <div className={style.delete__btns}>
        <Button type="submit">
          confirm
      </Button>
        <Button type="modal" className={style.cancel}>Cancel</Button>
      </div>
    </form>
  );
};

export default DeleteForm;


