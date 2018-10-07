import React from 'react';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
const Layout = props => {
  return (
    <div className="wrapper">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
