import React from 'react';
import {Link} from 'react-router-dom'; 
import style from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
      <Link to="/about">about the project</Link>
      <div>trackboard by Edward Rado</div>

      </div>
    </footer>
  );
};

export default Footer;