import React from 'react';
import Item from './Item';
import style from './search.module.scss';
import NoResult from './noResults'; 
import Loader from '../misc/Loader';
import {LOADER_STYLE} from '../../configs'; 

const Search = (props) => {

  const {
    data: { data, decodedQuery },
    loaders: { loading } } = props
  let list = null
  if (data && data.length > 0) {
    list = data && data.map(item => <Item item={item} decodedQuery={decodedQuery} key={item._id} />
    )
  } else {
    list = <NoResult/>
  }

  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {loading ? <Loader type={LOADER_STYLE.circle}/> :
          list
        }
      </ul>
    </div>
  );
};

export default Search;