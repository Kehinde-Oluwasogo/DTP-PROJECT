import React from 'react';
import MobileAuthForm from './MobileAuthForm';
import { useAppContext } from '../../context/AppContext';

const MobileLandingPage = () => {
  const { setCurrentView } = useAppContext();

  const handleBackToHomepage = () => {
    setCurrentView('homepage');
  };

  return (
    <div className="mobile-landing-container">
      <div className="mobile-landing-header">
        <button className="mobile-back-to-homepage-btn" onClick={handleBackToHomepage}>
          ← Back to Homepage
        </button>
        <h1 className="mobile-landing-title">Welcome to Ada National College</h1>
        <p className="mobile-landing-subtitle">Please login or create your account to continue</p>
      </div>
      
      <MobileAuthForm />
    </div>
  );
};

export default MobileLandingPage;
