import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="content-wrapper">
        {children}
      </div>
      <Footer />
    </div>
  );
}
