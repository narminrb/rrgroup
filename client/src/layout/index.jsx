import React from 'react';
import { Outlet } from 'react-router-dom';  
import Header from './header';
import Footer from './footer';
import Breadcrumb from './breadcrumb';

const Layout = () => {
  return (
    <>
      <Header />
      <Breadcrumb/>
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default Layout;
