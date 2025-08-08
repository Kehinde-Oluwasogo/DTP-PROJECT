import React, { useState } from 'react';

const MobileStudentDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('welcome');
  const [showMenu, setShowMenu] = useState(false);

  const tabs = [
    { id: 'welcome', label: 'Welcome', icon: '🏠' },
    { id: 'podcasts', label: 'Podcasts', icon: '🎧' },
    { id: 'opendays', label: 'Open Days', icon: '📅' }
  ];

  const renderWelcome = () => (
    <div className="mobile-welcome-tab">
      <div className="mobile-welcome-header">
        <h2>Welcome to Ada National College! 🎓</h2>
        <p>Your journey in technical education starts here!</p>
      </div>

      <div className="mobile-progress-section">
        <h3>Your Progress</h3>
        <div className="mobile-progress-bar">
          <div className="mobile-progress-fill" style={{ width: '25%' }}></div>
        </div>
        <p>25% Complete - Keep going! 🚀</p>
      </div>

      <div className="mobile-tlevels-section">
        <h3>T-Levels Overview</h3>
        <div className="mobile-tlevel-cards">
          <div className="mobile-tlevel-card">
            <div className="mobile-card-icon">💻</div>
            <h4>Digital Production</h4>
            <p>Learn web development, app creation, and digital media production.</p>
            <div className="mobile-card-stats">
              <span className="mobile-stat">Duration: 2 years</span>
              <span className="mobile-stat">Level: 3</span>
            </div>
          </div>
          
          <div className="mobile-tlevel-card">
            <div className="mobile-card-icon">🔧</div>
            <h4>Engineering</h4>
            <p>Explore mechanical, electrical, and software engineering principles.</p>
            <div className="mobile-card-stats">
              <span className="mobile-stat">Duration: 2 years</span>
              <span className="mobile-stat">Level: 3</span>
            </div>
          </div>
          
          <div className="mobile-tlevel-card">
            <div className="mobile-card-icon">💼</div>
            <h4>Management</h4>
            <p>Develop leadership skills and business management expertise.</p>
            <div className="mobile-card-stats">
              <span className="mobile-stat">Duration: 2 years</span>
              <span className="mobile-stat">Level: 3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-gamification-section">
        <h3>Your Achievements</h3>
        <div className="mobile-badges-grid">
          <div className="mobile-badge earned">
            <span className="mobile-badge-icon">🎯</span>
            <span className="mobile-badge-name">First Login</span>
          </div>
          <div className="mobile-badge">
            <span className="mobile-badge-icon">📚</span>
            <span className="mobile-badge-name">Course Started</span>
          </div>
          <div className="mobile-badge">
            <span className="mobile-badge-icon">⭐</span>
            <span className="mobile-badge-name">First Assessment</span>
          </div>
          <div className="mobile-badge">
            <span className="mobile-badge-icon">🏆</span>
            <span className="mobile-badge-name">Module Complete</span>
          </div>
        </div>
      </div>

      <div className="mobile-quick-actions">
        <h3>Quick Actions</h3>
        <div className="mobile-actions-grid">
          <button className="mobile-action-btn" onClick={() => setActiveTab('podcasts')}>
            <span className="mobile-action-icon">🎧</span>
            Listen to Podcasts
          </button>
          <button className="mobile-action-btn" onClick={() => setActiveTab('opendays')}>
            <span className="mobile-action-icon">📅</span>
            View Open Days
          </button>
        </div>
      </div>
    </div>
  );

  const renderPodcasts = () => (
    <div className="mobile-podcasts-tab">
      <h2>Educational Podcasts 🎧</h2>
      <div className="mobile-podcast-list">
        <div className="mobile-podcast-card">
          <div className="mobile-podcast-thumbnail">🎤</div>
          <div className="mobile-podcast-info">
            <h4>Tech Careers Insights</h4>
            <p>Discover career paths in technology and digital industries.</p>
            <div className="mobile-podcast-meta">
              <span>45 min</span>
              <span>•</span>
              <span>Technology</span>
            </div>
          </div>
          <button className="mobile-play-btn">▶️</button>
        </div>
        
        <div className="mobile-podcast-card">
          <div className="mobile-podcast-thumbnail">🔧</div>
          <div className="mobile-podcast-info">
            <h4>Engineering Excellence</h4>
            <p>Learn from industry experts about engineering best practices.</p>
            <div className="mobile-podcast-meta">
              <span>38 min</span>
              <span>•</span>
              <span>Engineering</span>
            </div>
          </div>
          <button className="mobile-play-btn">▶️</button>
        </div>
        
        <div className="mobile-podcast-card">
          <div className="mobile-podcast-thumbnail">💼</div>
          <div className="mobile-podcast-info">
            <h4>Leadership Skills</h4>
            <p>Develop management and leadership capabilities for your career.</p>
            <div className="mobile-podcast-meta">
              <span>52 min</span>
              <span>•</span>
              <span>Management</span>
            </div>
          </div>
          <button className="mobile-play-btn">▶️</button>
        </div>
      </div>
    </div>
  );

  const renderOpenDays = () => (
    <div className="mobile-opendays-tab">
      <h2>Upcoming Open Days 📅</h2>
      <div className="mobile-openday-list">
        <div className="mobile-openday-card">
          <div className="mobile-openday-date">
            <div className="mobile-date-day">15</div>
            <div className="mobile-date-month">MAR</div>
          </div>
          <div className="mobile-openday-info">
            <h4>Digital Production Showcase</h4>
            <p>🏢 Main Campus - Tech Hall</p>
            <p>🕐 10:00 AM - 4:00 PM</p>
            <p>Explore our digital labs and meet current students.</p>
          </div>
          <button className="mobile-register-btn">Register</button>
        </div>
        
        <div className="mobile-openday-card">
          <div className="mobile-openday-date">
            <div className="mobile-date-day">22</div>
            <div className="mobile-date-month">MAR</div>
          </div>
          <div className="mobile-openday-info">
            <h4>Engineering Open House</h4>
            <p>🏢 Engineering Building</p>
            <p>🕐 9:00 AM - 3:00 PM</p>
            <p>Hands-on workshops and career guidance sessions.</p>
          </div>
          <button className="mobile-register-btn">Register</button>
        </div>
        
        <div className="mobile-openday-card">
          <div className="mobile-openday-date">
            <div className="mobile-date-day">29</div>
            <div className="mobile-date-month">MAR</div>
          </div>
          <div className="mobile-openday-info">
            <h4>Management & Business Day</h4>
            <p>🏢 Business Center</p>
            <p>🕐 11:00 AM - 5:00 PM</p>
            <p>Learn about business management and entrepreneurship.</p>
          </div>
          <button className="mobile-register-btn">Register</button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'welcome':
        return renderWelcome();
      case 'podcasts':
        return renderPodcasts();
      case 'opendays':
        return renderOpenDays();
      default:
        return renderWelcome();
    }
  };

  return (
    <div className="mobile-student-dashboard">
      {/* Mobile Header */}
      <div className="mobile-dashboard-header">
        <div className="mobile-header-content">
          <h1>Student Portal</h1>
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

export default MobileStudentDashboard;
