import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';

const MobileCollegeHomePage = ({ handleLogin }) => {
  const { setCurrentView } = useAppContext();
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLoginDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLoginClick = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  const handleRoleSelect = (role) => {
    setShowLoginDropdown(false);
    handleLogin(role);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleMenuLinkClick = (sectionId) => {
    setShowMobileMenu(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mobile-college-homepage">
      {/* Mobile Navigation Header */}
      <nav className="mobile-nav">
        <div className="mobile-nav-container">
          <div className="mobile-logo-section">
            <div className="mobile-college-logo">A</div>
            <span className="mobile-college-name">Ada College</span>
          </div>
          
          <div className="mobile-nav-controls">
            <div className="mobile-login-dropdown" ref={dropdownRef}>
              <button className="mobile-login-btn" onClick={handleLoginClick}>
                Login
              </button>
              {showLoginDropdown && (
                <div className="mobile-dropdown-menu">
                  <button 
                    className="mobile-dropdown-item" 
                    onClick={() => handleRoleSelect('student')}
                  >
                    Student Login
                  </button>
                  <button 
                    className="mobile-dropdown-item" 
                    onClick={() => handleRoleSelect('admin')}
                  >
                    Admin Login
                  </button>
                </div>
              )}
            </div>
            
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <span className={`hamburger ${showMobileMenu ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="mobile-menu">
            <button onClick={() => handleMenuLinkClick('about')}>About</button>
            <button onClick={() => handleMenuLinkClick('courses')}>Courses</button>
            <button onClick={() => {
              setShowMobileMenu(false);
              handleRoleSelect('student');
            }}>Apply Now</button>
            <button onClick={() => {
              setShowMobileMenu(false);
              alert('Contact us at: info@ada.ac.uk or call 0800 123 4567');
            }}>Contact</button>
          </div>
        )}
      </nav>

      {/* Mobile Hero Section */}
      <section className="mobile-hero-section">
        <div className="mobile-hero-container">
          <div className="mobile-hero-content">
            <h1 className="mobile-hero-title">
              Shape Your Future with <span className="mobile-highlight">Digital Skills</span>
            </h1>
            <p className="mobile-hero-subtitle">
              Join Ada National College and unlock your potential in the digital world with our T-levels.
            </p>
            <div className="mobile-hero-buttons">
              <button className="mobile-cta-primary" onClick={() => handleRoleSelect('student')}>
                Apply Now
              </button>
              <button className="mobile-cta-secondary">
                Book Open Day
              </button>
            </div>
          </div>
          
          <div className="mobile-hero-graphic">
            <div className="mobile-floating-elements">
              <div className="mobile-floating-element elem-1">💻</div>
              <div className="mobile-floating-element elem-2">🚀</div>
              <div className="mobile-floating-element elem-3">⚡</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Features Section */}
      <section className="mobile-features-section" id="about">
        <div className="mobile-container">
          <h2 className="mobile-section-title">Why Choose Ada?</h2>
          <div className="mobile-features-grid">
            <div className="mobile-feature-item">
              <div className="mobile-feature-icon">🎓</div>
              <h3>Industry-Led Learning</h3>
              <p>Curriculum designed with leading tech companies for real-world skills.</p>
            </div>
            <div className="mobile-feature-item">
              <div className="mobile-feature-icon">💼</div>
              <h3>Work Experience</h3>
              <p>45+ weeks placement with top employers like Microsoft and Google.</p>
            </div>
            <div className="mobile-feature-item">
              <div className="mobile-feature-icon">🌟</div>
              <h3>Outstanding Results</h3>
              <p>95% of graduates progress to university or secure employment.</p>
            </div>
            <div className="mobile-feature-item">
              <div className="mobile-feature-icon">🤝</div>
              <h3>Personal Support</h3>
              <p>Small classes and dedicated mentorship for individual attention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Courses Section */}
      <section className="mobile-courses-section" id="courses">
        <div className="mobile-container">
          <h2 className="mobile-section-title">Our T-Levels</h2>
          <div className="mobile-courses-list">
            <div className="mobile-course-item featured">
              <div className="mobile-course-badge">Most Popular</div>
              <div className="mobile-course-header">
                <div className="mobile-course-icon">💻</div>
                <h3>Digital Production & Development</h3>
              </div>
              <p>Master web development, app creation, and digital design.</p>
              <div className="mobile-course-highlights">
                <span>Web Development</span>
                <span>Mobile Apps</span>
                <span>UI/UX Design</span>
                <span>Industry Placement</span>
              </div>
              <button className="mobile-course-btn" onClick={() => handleRoleSelect('student')}>
                Learn More
              </button>
            </div>
            
            <div className="mobile-course-item">
              <div className="mobile-course-header">
                <div className="mobile-course-icon">🔬</div>
                <h3>Health & Science</h3>
              </div>
              <p>Explore healthcare innovation and scientific research.</p>
              <div className="mobile-course-highlights">
                <span>Lab Techniques</span>
                <span>Healthcare Tech</span>
                <span>Research Methods</span>
                <span>NHS Placement</span>
              </div>
              <button className="mobile-course-btn" onClick={() => handleRoleSelect('student')}>
                Learn More
              </button>
            </div>
            
            <div className="mobile-course-item">
              <div className="mobile-course-header">
                <div className="mobile-course-icon">⚙️</div>
                <h3>Engineering & Manufacturing</h3>
              </div>
              <p>Design and build with modern engineering principles.</p>
              <div className="mobile-course-highlights">
                <span>CAD Design</span>
                <span>Robotics</span>
                <span>3D Printing</span>
                <span>Industry 4.0</span>
              </div>
              <button className="mobile-course-btn" onClick={() => handleRoleSelect('student')}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats Section */}
      <section className="mobile-stats-section">
        <div className="mobile-container">
          <div className="mobile-stats-grid">
            <div className="mobile-stat-item">
              <div className="mobile-stat-number">95%</div>
              <div className="mobile-stat-label">Success Rate</div>
            </div>
            <div className="mobile-stat-item">
              <div className="mobile-stat-number">150+</div>
              <div className="mobile-stat-label">Partners</div>
            </div>
            <div className="mobile-stat-item">
              <div className="mobile-stat-number">£28K</div>
              <div className="mobile-stat-label">Starting Salary</div>
            </div>
            <div className="mobile-stat-item">
              <div className="mobile-stat-number">2</div>
              <div className="mobile-stat-label">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Testimonials */}
      <section className="mobile-testimonials-section">
        <div className="mobile-container">
          <h2 className="mobile-section-title">Student Stories</h2>
          <div className="mobile-testimonial-slider">
            <div className="mobile-testimonial-item active">
              <div className="mobile-testimonial-content">
                <p>"Ada gave me the skills I needed. The placement led to my dream job!"</p>
              </div>
              <div className="mobile-testimonial-author">
                <div className="mobile-author-avatar">👨‍💻</div>
                <div className="mobile-author-info">
                  <h4>James Mitchell</h4>
                  <span>Digital Graduate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile CTA Section */}
      <section className="mobile-cta-section">
        <div className="mobile-container">
          <div className="mobile-cta-content">
            <h2>Ready to Start?</h2>
            <p>Join hundreds building their future with Ada National College</p>
            <div className="mobile-cta-buttons">
              <button className="mobile-cta-primary large" onClick={() => handleRoleSelect('student')}>
                Apply Today
              </button>
              <button className="mobile-cta-secondary large">
                Book Open Day
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Footer */}
      <footer className="mobile-footer">
        <div className="mobile-container">
          <div className="mobile-footer-content">
            <div className="mobile-footer-main">
              <h4>Ada National College</h4>
              <p>Shaping digital leaders of tomorrow through innovative education.</p>
              
              <div className="mobile-contact-info">
                <p>📍 123 Innovation Way, Tech City</p>
                <p>📞 0800 123 4567</p>
                <p>✉️ info@ada.ac.uk</p>
              </div>
              
              <div className="mobile-social-links">
                <a href="#" className="mobile-social-link">📘</a>
                <a href="#" className="mobile-social-link">🐦</a>
                <a href="#" className="mobile-social-link">📷</a>
                <a href="#" className="mobile-social-link">💼</a>
              </div>
            </div>
            
            <div className="mobile-footer-links">
              <a href="#about">About</a>
              <a href="#courses">Courses</a>
              <a href="#admissions">Admissions</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="mobile-footer-bottom">
            <p>&copy; 2025 Ada National College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MobileCollegeHomePage;
