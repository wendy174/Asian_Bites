import React from 'react';
import ChinatownImage from './ChinatownImage.jpeg'

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${ChinatownImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;