import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import StudentDashboard from './StudentDashboard';
import AdminDashboard from './AdminDashboard';

const Dashboard = () => {
  const { currentUser, logout } = useAppContext();

  return (
    <div className="container">
      <div className="header">
        <h1>
          Welcome, {currentUser.full_name} 
          <span style={{ fontSize: '14px', color: '#666', marginLeft: '10px' }}>
            ({currentUser.role})
          </span>
        </h1>
        <button className="btn logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="dashboard">
        {currentUser.role === 'admin' ? (
          <AdminDashboard />
        ) : (
          <StudentDashboard />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
