import React from 'react';
import { AppProvider } from './context/AppContext';
import CollegeHomePage from './components/CollegeHomePage';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import CourseDetail from './components/CourseDetail';
import { useAppContext } from './context/AppContext';

function AppContent() {
  const { currentUser, currentView, setCurrentView } = useAppContext();

  return (
    <div className="App">
      {currentView === 'dashboard' && (currentUser ? <Dashboard /> : <LandingPage />)}
      {currentView === 'homepage' && <CollegeHomePage />}
      {currentView === 'courseDetail' && <CourseDetail />}
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
