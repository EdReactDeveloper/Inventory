import React from 'react';
import Item from '../../../containers/Item';
import Loader from './ItemLoader'; 

const List = ({ items, profile, fetchingItem }) => {

  const renderItems = () => {
    if (items) {
      return items.map(item => {
        return <Item key={item._id} {...item} />
      })
    }
    return <Loader/>
  }

  return (
    <ul>
      {profile.profileLoading ? <div>loading data...</div> :
        renderItems()
      }
      {fetchingItem && <Loader/>}
    </ul>
  );
};

export default List;