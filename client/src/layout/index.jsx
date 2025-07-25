import React from 'react';
import { Outlet } from 'react-router-dom';  
import Header from './header';
import Footer from './footer';
import Breadcrumb from './breadcrumb';
import { Helmet } from 'react-helmet-async'; 

const Layout = () => {
  return (
    <>
    
      <Helmet>
        <title>Rrgroup | Official Website</title>
        <meta name="description" content="Welcome to the official website of Rrgroup. Discover our services, projects, news, and more." />
        <meta property="og:title" content="Rrgroup" />
        <meta property="og:description" content="Explore all services and updates from Rrgroup." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <Breadcrumb />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default Layout;
