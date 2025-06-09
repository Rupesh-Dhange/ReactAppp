import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
        <p className="mb-0">
          <a href="mailto:contact@mystore.com" className="text-white text-decoration-none">contact@mystore.com</a>
        </p>
        <div className="mt-2">
          <a href="#" className="text-white mx-2">Privacy Policy</a> | 
          <a href="#" className="text-white mx-2"> Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
