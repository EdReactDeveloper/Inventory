import React from 'react';
import Button from '../../misc/Elements/Button';
import style from './Forms.module.scss';
import { FORM_INSTANCE } from '../../../configs';

const DeleteForm = (payload) => {
  const {
    data: {
      deleteAll,
      name
    },
    methods: {
      removeItem,
      onChangeHandler
    },
    checks: {
      instance
    }
  } = payload

  return (
    <form onSubmit={removeItem} className={style.delete}>
      {instance === FORM_INSTANCE.profile ?
        <h3 className={style.delete__profile}>Delete profile?</h3> :
        <div className={style.delete__item_wrapper}>
          <div>Delete <span>{name}</span> ? </div>
          <div className={style.delete__checkbox_wrapper}>
            <input type="checkbox" value={deleteAll} checked={deleteAll} id="deleteAll" name="deleteAll" onChange={(e) => onChangeHandler(e)} />
            <label htmlFor="deleteAll">delete all the content inside?</label>
          </div>
        </div>
      }
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


