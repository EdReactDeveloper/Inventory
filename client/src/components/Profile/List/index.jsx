import React from 'react';
import Item from '../../../containers/Item';


const List = ({ items, profile, fetchingItem }) => {

  const renderItems = () => {
    if (items) {
      return items.map(item => {
        return <Item key={item._id} {...item} />
      })
    }
    return <div>loading...</div>
  }

  return (
    <ul>
      {profile.profileLoading ? <div>loading data...</div> :
        renderItems()
      }
      {fetchingItem && <div>adding item...</div>}
    </ul>
  );
};

export default List;