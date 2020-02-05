import React from 'react';
import { Link } from 'react-router-dom';
import style from './search.module.scss';

const SearchItem = (props) => {
  const { item: { name, location, tags, _id } } = props
  return (
    <div className={style.item}>
      <Link to={`/profile/${_id}`}><h3>{name}</h3></Link>
      <div><span>location</span>{location}</div>
      <div><span>tags</span>{tags}</div>
    </div>
  );
};

export default SearchItem;