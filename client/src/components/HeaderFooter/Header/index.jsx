import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import app from '../../../App.module.scss';
import Auth from './Auth';
import SearchBar from '../../../containers/Seach/SearchBar';

const Header = (props) => {

  return (
    <header className={style.main}>
      <div className={`${style.wrapper} ${app.container}`}>
        <nav className={style.logo}>
          <h4>
            <Link to="/">Inventory</Link>
          </h4>
        </nav>
        <SearchBar />
        <Auth {...props} />
      </div>
    </header>
  );
};

export default Header;