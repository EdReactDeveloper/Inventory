import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../components/Modal/From/Delete';
import { removeProfileAction } from '../../../store/actions/profile';
import { removeItemAction, removePageAction } from '../../../store/actions/items';
import setAlert from '../../../store/actions/alerts';
import { FORM_INSTANCE } from '../../../configs';
import { modalHandler } from '../../../store/actions/modal';

const FormContainer = (props) => {
  const dispatch = useDispatch()
  const { history } = props
  const { id, parentId, instance, name } = useSelector(state => state.modal.form)
  const [deleteAll, setOption] = useState(true)

  // CHECKBOX HANDLER
  const onChangeHandler = () => {
    setOption(!deleteAll)
  }

  // SUBMIT DELETE
  const removeItem = (e) => {
    e.preventDefault()
    switch (instance) {
      case FORM_INSTANCE.page: dispatch(removePageAction({ id, parentId, deleteAll, history })); break;
      case FORM_INSTANCE.item: dispatch(removeItemAction({ id, deleteAll })); break;
      case FORM_INSTANCE.profile: dispatch(removeProfileAction({ id, history })); break;
      default: dispatch(setAlert('nothing to remove', 'danger'))
    }
    dispatch(modalHandler())
  }

  const payload = {
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
  }

  return <Form {...payload} />
};

export default FormContainer;