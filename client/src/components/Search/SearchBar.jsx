import React from 'react';
import style from './search.module.scss'; 
import Button from '../misc/Elements/Button'; 

const SearchBar = (props) => {
  const {
    data: {
      query
    },
    methods: {
      searchSubmitHandler,
      queryHandler
    }
  } = props
  return (
    <form onSubmit={searchSubmitHandler}>
      <input type="text"className={style.input}
       value={query} onChange={(e)=>queryHandler(e)}/>
      <Button type="search" >search</Button>
    </form>
  );
};

export default SearchBar;