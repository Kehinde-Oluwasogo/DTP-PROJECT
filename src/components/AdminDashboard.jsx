import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import PodcastList from './PodcastList';
import OpenDayList from './OpenDayList';
import UserList from './UserList';
import PodcastUploadForm from './PodcastUploadForm';
import OpenDayForm from './OpenDayForm';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div>
      <div className="nav-tabs">
        <button
          className={`nav-tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Students
        </button>
        <button
          className={`nav-tab ${activeTab === 'podcasts' ? 'active' : ''}`}
          onClick={() => setActiveTab('podcasts')}
        >
          Podcasts
        </button>
        <button
          className={`nav-tab ${activeTab === 'opendays' ? 'active' : ''}`}
          onClick={() => setActiveTab('opendays')}
        >
          Open Days
        </button>
        <button
          className={`nav-tab ${activeTab === 'upload' ? 'active' : ''}`}
          onClick={() => setActiveTab('upload')}
        >
          Upload Podcast
        </button>
        <button
          className={`nav-tab ${activeTab === 'add-event' ? 'active' : ''}`}
          onClick={() => setActiveTab('add-event')}
        >
          Add Open Day
        </button>
      </div>

      {activeTab === 'users' && <UserList />}
      {activeTab === 'podcasts' && <PodcastList />}
      {activeTab === 'opendays' && <OpenDayList />}
      {activeTab === 'upload' && <PodcastUploadForm />}
      {activeTab === 'add-event' && <OpenDayForm />}
    </div>
  );
};

export default AdminDashboard;
