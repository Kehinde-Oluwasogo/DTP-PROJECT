import React, { useState } from 'react';

const MobileAdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showMenu, setShowMenu] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'podcasts', label: 'Podcasts', icon: '🎧' },
    { id: 'opendays', label: 'Events', icon: '📅' }
  ];

  const renderOverview = () => (
    <div className="mobile-overview-tab">
      <div className="mobile-overview-header">
        <h2>Admin Dashboard Overview</h2>
        <p>Manage students, content, and events</p>
      </div>

      <div className="mobile-stats-grid">
        <div className="mobile-stat-card">
          <div className="mobile-stat-icon">👥</div>
          <div className="mobile-stat-number">156</div>
          <div className="mobile-stat-label">Total Students</div>
        </div>
        
        <div className="mobile-stat-card">
          <div className="mobile-stat-icon">🎧</div>
          <div className="mobile-stat-number">24</div>
          <div className="mobile-stat-label">Podcasts</div>
        </div>
        
        <div className="mobile-stat-card">
          <div className="mobile-stat-icon">📅</div>
          <div className="mobile-stat-number">8</div>
          <div className="mobile-stat-label">Events</div>
        </div>
        
        <div className="mobile-stat-card">
          <div className="mobile-stat-icon">📈</div>
          <div className="mobile-stat-number">89%</div>
          <div className="mobile-stat-label">Engagement</div>
        </div>
      </div>

      <div className="mobile-recent-activity">
        <h3>Recent Activity</h3>
        <div className="mobile-activity-list">
          <div className="mobile-activity-item">
            <div className="mobile-activity-icon">👤</div>
            <div className="mobile-activity-details">
              <p><strong>New student registration</strong></p>
              <span>Sarah Johnson - 2 hours ago</span>
            </div>
          </div>
          
          <div className="mobile-activity-item">
            <div className="mobile-activity-icon">🎧</div>
            <div className="mobile-activity-details">
              <p><strong>Podcast uploaded</strong></p>
              <span>Tech Careers Insights - 5 hours ago</span>
            </div>
          </div>
          
          <div className="mobile-activity-item">
            <div className="mobile-activity-icon">📅</div>
            <div className="mobile-activity-details">
              <p><strong>Event registered</strong></p>
              <span>Engineering Open House - 1 day ago</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-quick-actions">
        <h3>Quick Actions</h3>
        <div className="mobile-admin-actions">
          <button className="mobile-action-btn" onClick={() => setActiveTab('users')}>
            <span className="mobile-action-icon">👥</span>
            Manage Users
          </button>
          <button className="mobile-action-btn" onClick={() => setActiveTab('podcasts')}>
            <span className="mobile-action-icon">🎧</span>
            Upload Podcast
          </button>
          <button className="mobile-action-btn" onClick={() => setActiveTab('opendays')}>
            <span className="mobile-action-icon">📅</span>
            Create Event
          </button>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="mobile-users-tab">
      <div className="mobile-section-header">
        <h2>User Management 👥</h2>
        <button className="mobile-add-btn">+ Add User</button>
      </div>
      
      <div className="mobile-user-list">
        <div className="mobile-user-card">
          <div className="mobile-user-avatar">👤</div>
          <div className="mobile-user-info">
            <h4>John Smith</h4>
            <p>john.smith@email.com</p>
            <div className="mobile-user-meta">
              <span className="mobile-user-role student">Student</span>
              <span className="mobile-user-status eligible">Eligible</span>
            </div>
          </div>
          <button className="mobile-user-actions">⋮</button>
        </div>
        
        <div className="mobile-user-card">
          <div className="mobile-user-avatar">👤</div>
          <div className="mobile-user-info">
            <h4>Sarah Johnson</h4>
            <p>sarah.j@email.com</p>
            <div className="mobile-user-meta">
              <span className="mobile-user-role student">Student</span>
              <span className="mobile-user-status eligible">Eligible</span>
            </div>
          </div>
          <button className="mobile-user-actions">⋮</button>
        </div>
        
        <div className="mobile-user-card">
          <div className="mobile-user-avatar">👤</div>
          <div className="mobile-user-info">
            <h4>Mike Wilson</h4>
            <p>mike.w@email.com</p>
            <div className="mobile-user-meta">
              <span className="mobile-user-role student">Student</span>
              <span className="mobile-user-status not-eligible">Not Eligible</span>
            </div>
          </div>
          <button className="mobile-user-actions">⋮</button>
        </div>
      </div>
    </div>
  );

  const renderPodcasts = () => (
    <div className="mobile-podcasts-admin-tab">
      <div className="mobile-section-header">
        <h2>Podcast Management 🎧</h2>
        <button className="mobile-add-btn">+ Upload</button>
      </div>
      
      <div className="mobile-upload-form">
        <h3>Upload New Podcast</h3>
        <div className="mobile-form-group">
          <label>Title</label>
          <input type="text" className="mobile-form-input" placeholder="Enter podcast title" />
        </div>
        <div className="mobile-form-group">
          <label>Description</label>
          <textarea className="mobile-form-textarea" placeholder="Enter description" rows="3"></textarea>
        </div>
        <div className="mobile-form-group">
          <label>Audio File</label>
          <input type="file" className="mobile-form-input" accept="audio/*" />
        </div>
        <button className="mobile-btn mobile-btn-primary">Upload Podcast</button>
      </div>
      
      <div className="mobile-podcast-list">
        <h3>Existing Podcasts</h3>
        <div className="mobile-podcast-admin-card">
          <div className="mobile-podcast-thumbnail">🎤</div>
          <div className="mobile-podcast-details">
            <h4>Tech Careers Insights</h4>
            <p>45 min • 127 plays</p>
          </div>
          <button className="mobile-edit-btn">Edit</button>
        </div>
        
        <div className="mobile-podcast-admin-card">
          <div className="mobile-podcast-thumbnail">🔧</div>
          <div className="mobile-podcast-details">
            <h4>Engineering Excellence</h4>
            <p>38 min • 89 plays</p>
          </div>
          <button className="mobile-edit-btn">Edit</button>
        </div>
      </div>
    </div>
  );

  const renderOpenDays = () => (
    <div className="mobile-opendays-admin-tab">
      <div className="mobile-section-header">
        <h2>Event Management 📅</h2>
        <button className="mobile-add-btn">+ Create</button>
      </div>
      
      <div className="mobile-event-form">
        <h3>Create New Event</h3>
        <div className="mobile-form-group">
          <label>Event Name</label>
          <input type="text" className="mobile-form-input" placeholder="Enter event name" />
        </div>
        <div className="mobile-form-group">
          <label>Description</label>
          <textarea className="mobile-form-textarea" placeholder="Enter description" rows="3"></textarea>
        </div>
        <div className="mobile-form-row">
          <div className="mobile-form-group">
            <label>Date</label>
            <input type="date" className="mobile-form-input" />
          </div>
          <div className="mobile-form-group">
            <label>Time</label>
            <input type="time" className="mobile-form-input" />
          </div>
        </div>
        <div className="mobile-form-group">
          <label>Location</label>
          <input type="text" className="mobile-form-input" placeholder="Enter location" />
        </div>
        <button className="mobile-btn mobile-btn-primary">Create Event</button>
      </div>
      
      <div className="mobile-event-list">
        <h3>Upcoming Events</h3>
        <div className="mobile-event-admin-card">
          <div className="mobile-event-date">
            <div className="mobile-date-day">15</div>
            <div className="mobile-date-month">MAR</div>
          </div>
          <div className="mobile-event-details">
            <h4>Digital Production Showcase</h4>
            <p>Main Campus - Tech Hall</p>
            <span className="mobile-event-registrations">24 registrations</span>
          </div>
          <button className="mobile-edit-btn">Edit</button>
        </div>
        
        <div className="mobile-event-admin-card">
          <div className="mobile-event-date">
            <div className="mobile-date-day">22</div>
            <div className="mobile-date-month">MAR</div>
          </div>
          <div className="mobile-event-details">
            <h4>Engineering Open House</h4>
            <p>Engineering Building</p>
            <span className="mobile-event-registrations">18 registrations</span>
          </div>
          <button className="mobile-edit-btn">Edit</button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'users':
        return renderUsers();
      case 'podcasts':
        return renderPodcasts();
      case 'opendays':
        return renderOpenDays();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="mobile-admin-dashboard">
      {/* Mobile Header */}
      <div className="mobile-dashboard-header">
        <div className="mobile-header-content">
          <h1>Admin Portal</h1>
          <div className="mobile-header-actions">
            <button 
              className="mobile-menu-toggle"
              onClick={() => setShowMenu(!showMenu)}
            >
              ☰
            </button>
          </div>
        </div>
        
        {showMenu && (
          <div className="mobile-dropdown-menu">
            <button onClick={onLogout} className="mobile-logout-btn">
              🚪 Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`mobile-nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="mobile-tab-icon">{tab.icon}</span>
            <span className="mobile-tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mobile-tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default MobileAdminDashboard;
