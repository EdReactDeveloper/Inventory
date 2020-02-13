import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.scss';
import Auth from './Auth';
import SearchBar from '../../../containers/Seach/SearchBar';

const Header = (props) => {
  const { isLoggedIn } = props
  return (
    <header>
      <h4 className={style.logo}>
        <Link to="/">Inventory</Link>
      </h4>
      <div className={style.middle}>
        {isLoggedIn && <SearchBar {...props} />}
      </div>
      <nav>
      <Auth {...props} />
      </nav>
    </header>
  );
};

export default Header;