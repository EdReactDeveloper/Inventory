import React from 'react';
import { useDispatch } from 'react-redux';
import Item from '../components/Profile/List/Item';
import { selectItemAction } from '../store/actions/items';

const ItemContainer = (props) => {
  const dispatch = useDispatch()

  const selectItemHandler = (payload) => {
    dispatch(selectItemAction(payload))
  }

  const payload = { ...props, methods: { selectItemHandler } }
  return <Item {...payload} />
};

export default ItemContainer;