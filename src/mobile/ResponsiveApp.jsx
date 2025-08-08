import React, { useState, useEffect } from 'react';
import DesktopApp from '../App';
import MobileApp from './MobileApp';

const ResponsiveApp = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="responsive-app">
      {isMobile ? <MobileApp /> : <DesktopApp />}
    </div>
  );
};

export default ResponsiveApp;
