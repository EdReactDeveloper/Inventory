import React from 'react';
import Item from '../../../containers/Item';
import ItemLoader from './ItemLoader';
import Loader from '../../misc/Loader/Circle';
import style from './list.module.scss'; 
import { ITEM_STYLE } from '../../../configs';

const List = (props) => {

  const {
    data: { list, profile },
    loaders: { fetchingItem } } = props

  const renderList = () => {
    if (list) {
      return list.map(item => {
        return <Item key={item._id} item={item} {...props} />
      })
    }
    return <Loader  />
  }

  return (
    <ul className={style.list}>
      {fetchingItem && <ItemLoader type={ITEM_STYLE.add} />}
      {profile.profileLoading ? <div>loading data...</div> :
        renderList()
      }
    </ul>
  );
};

export default List;