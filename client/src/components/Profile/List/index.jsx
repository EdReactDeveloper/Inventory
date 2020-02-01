import React from 'react';
import Item from '../../../containers/Item';
import Loader from './ItemLoader';

const List = (props) => {

  const {
    data: { list, profile },
    loaders: { fetchingItem } } = props

  const renderItems = () => {
    if (list) {
      return list.map(item => {
        return <Item key={item._id} item={item} {...props} />
      })
    }
    return <Loader />
  }

  return (
    <ul>
      {profile.profileLoading ? <div>loading data...</div> :
        renderItems()
      }
      {fetchingItem && <Loader />}
    </ul>
  );
};

export default List;