import React from 'react';
import Item from './Item';
import style from './search.module.scss';

const Search = (props) => {

  const {
    data: { data, decodedQuery },
    loaders: { loading } } = props
  let list = null
  if (data && data.length > 0) {
    list = data && data.map(item => <Item item={item} decodedQuery={decodedQuery} key={item._id} />
    )
  } else {
    list = <div>no reults</div>
  }

  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {loading ? <li>loading...</li> :
          list
        }
      </ul>
    </div>
  );
};

export default Search;