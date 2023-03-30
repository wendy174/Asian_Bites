import React from 'react';
import HeroImage from './HeroImage.jpeg'

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImage})`,
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