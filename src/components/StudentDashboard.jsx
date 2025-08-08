import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import WelcomeTab from './WelcomeTab';
import PodcastList from './PodcastList';
import OpenDayList from './OpenDayList';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('welcome');
  const { currentUser } = useAppContext();

  return (
    <div>
      <div className="nav-tabs">
        <button
          className={`nav-tab ${activeTab === 'welcome' ? 'active' : ''}`}
          onClick={() => setActiveTab('welcome')}
        >
          🏠 Welcome
        </button>
        <button
          className={`nav-tab ${activeTab === 'podcasts' ? 'active' : ''}`}
          onClick={() => setActiveTab('podcasts')}
        >
          🎧 Podcasts
        </button>
        <button
          className={`nav-tab ${activeTab === 'opendays' ? 'active' : ''}`}
          onClick={() => setActiveTab('opendays')}
        >
          📅 Open Days
        </button>
      </div>

      {!currentUser.is_eligible && (
        <div style={{ 
          backgroundColor: '#fff3cd', 
          border: '1px solid #ffeaa7', 
          borderRadius: '4px', 
          padding: '15px', 
          marginBottom: '20px' 
        }}>
          <strong>Note:</strong> You are not eligible for certain features based on your age.
        </div>
      )}

      {activeTab === 'welcome' && <WelcomeTab />}
      {activeTab === 'podcasts' && <PodcastList />}
      {activeTab === 'opendays' && <OpenDayList />}
    </div>
  );
};

export default StudentDashboard;
