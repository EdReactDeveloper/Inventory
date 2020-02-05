import React from 'react';
import Item from './Item';
import style from './search.module.scss'; 

const Search = (props) => {

  const {
    data: { data },
    loaders: { loading } } = props
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {loading ? <li>loading...</li> :
          data && data.map(item => <Item item={item} key={item._id} />
          )
        }
      </ul>
    </div>
  );
};

export default Search;