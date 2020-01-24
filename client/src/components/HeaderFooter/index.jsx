import React from 'react';
import Header from '../../containers/Header';
import Footer from './Footer';

const Navigation = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Navigation;