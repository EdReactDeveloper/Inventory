import React from 'react';
import Item from '../Profile/List/Item';

const Search = (props) => {

  const {
    data: { data },
    loaders: { loading } } = props

  return (
    <div>
      <ul>
        {loading ? <li>loading...</li> :
          data && data.map(item => <Item item={item} key={item._id} />
          )
        }
        searh results
      </ul>
    </div>
  );
};

export default Search;