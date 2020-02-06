import React from 'react';
import { Link } from 'react-router-dom';
import style from './search.module.scss';
import { highlight } from '../misc/utilFuncs';

const SearchItem = (props) => {
  const { item: { name, location, tags, _id }, decodedQuery } = props

  return (
    <div className={style.item}>
      <Link to={`/profile/${_id}`}><h3>{highlight(name, decodedQuery, style.item_highlight)}</h3></Link>
      <div><span className={style.item_category}>location: </span>{highlight(location, decodedQuery, style.item_highlight)}</div>
      <div><span className={style.item_category}>tags: </span>{highlight(tags, decodedQuery, style.item_highlight)}</div>
    </div>
  );
};

export default SearchItem;