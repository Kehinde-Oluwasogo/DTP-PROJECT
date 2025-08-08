import React from 'react';
import AuthForm from './AuthForm';
import { useAppContext } from '../context/AppContext';

const LandingPage = () => {
  const { setCurrentView } = useAppContext();

  const handleBackToHomepage = () => {
    setCurrentView('homepage');
  };

  return (
    <div className="landing-container">
      <div className="landing-header">
        <button className="back-to-homepage-btn" onClick={handleBackToHomepage}>
          ← Back to Homepage
        </button>
        <h1>Welcome to Ada National College</h1>
        <p>Please login or create your account to continue</p>
      </div>
      
      <AuthForm />
    </div>
  );
};

export default LandingPage;
