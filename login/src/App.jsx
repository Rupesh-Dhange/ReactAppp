import React from 'react'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <>
      <NavBar />
      <div style={{ minHeight: '80vh', padding: '1rem' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
