import React from 'react';
import Header from '../../containers/Header';
import Footer from './Footer';

const Navigation = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Navigation;