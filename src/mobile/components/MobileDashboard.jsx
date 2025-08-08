import React, { useState } from 'react';
import MobileStudentDashboard from './MobileStudentDashboard';
import MobileAdminDashboard from './MobileAdminDashboard';

const MobileDashboard = ({ role, onLogout }) => {
  return (
    <div className="mobile-dashboard">
      {role === 'student' ? (
        <MobileStudentDashboard onLogout={onLogout} />
      ) : (
        <MobileAdminDashboard onLogout={onLogout} />
      )}
    </div>
  );
};

export default MobileDashboard;
