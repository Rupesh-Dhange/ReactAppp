// layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from './Footer';


const  LayOut = () => {
  return (
    <div>
      <NavBar />
      
      <main style={{ minHeight: '80vh', padding: '1rem' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayOut;
