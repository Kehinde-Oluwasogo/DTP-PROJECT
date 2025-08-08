import React, { useState, useEffect } from 'react';
import { AppProvider, useAppContext } from '../context/AppContext';
import MobileCollegeHomePage from './components/MobileCollegeHomePage';
import MobileLandingPage from './components/MobileLandingPage';
import MobileDashboard from './components/MobileDashboard';
import './styles/mobile.css';

const MobileAppContent = () => {
  const { currentView, setCurrentView, currentUser, login, logout } = useAppContext();

  const handleLogin = (role) => {
    sessionStorage.setItem('selectedRole', role);
    setCurrentView('login');
  };

  const handleLogout = () => {
    logout();
    setCurrentView('homepage');
  };

  const handleBackToHomepage = () => {
    setCurrentView('homepage');
  };

  return (
    <div className="mobile-app">
      {currentView === 'homepage' && (
        <MobileCollegeHomePage handleLogin={handleLogin} />
      )}
      {currentView === 'login' && (
        <MobileLandingPage />
      )}
      {currentView === 'dashboard' && currentUser && (
        <MobileDashboard role={currentUser.role} onLogout={handleLogout} />
      )}
    </div>
  );
};

const MobileApp = () => {
  return (
    <AppProvider>
      <MobileAppContent />
    </AppProvider>
  );
};

export default MobileApp;
