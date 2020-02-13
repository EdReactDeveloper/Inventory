import React from 'react';
import Header from '../../containers/Header';
import Footer from './Footer';
import app from '../../App.module.scss'; 

const Navigation = ({ children }) => {
  return (
    <div className={app.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Navigation;