import React from 'react';
import style from './search.module.scss'; 
import Button from '../../../misc/Elements/Button'; 

const SearchBar = ({changeHandler, submit}) => {
  return (
    <form onSubmit={submit}>
      <input type="text" onChange={(e)=>changeHandler(e)} className={style.input}/>
      <Button type="search" >search</Button>
    </form>
  );
};

export default SearchBar;