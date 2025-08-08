import React from 'react';
import { AppProvider } from './context/AppContext';
import CollegeHomePage from './components/CollegeHomePage';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import { useAppContext } from './context/AppContext';

function AppContent() {
  const { currentUser, currentView, setCurrentView } = useAppContext();

  if (currentView === 'dashboard') {
    return (
      <div className="App">
        {currentUser ? <Dashboard /> : <LandingPage />}
      </div>
    );
  }

  return <CollegeHomePage />;
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
