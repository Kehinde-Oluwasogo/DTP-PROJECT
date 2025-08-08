import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useAppContext } from '../context/AppContext';

const CollegeHomePage = () => {
  const { setCurrentView, setSelectedCourseId } = useAppContext();
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
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
    setCurrentView('dashboard');
    // Store the selected role in sessionStorage for the AuthForm to use
    sessionStorage.setItem('selectedRole', role);
  };

  const handleCourseClick = (courseId) => {
    setSelectedCourseId(courseId);
    setCurrentView('courseDetail');
  };

  // Chatbot demo state
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am your T-levels info bot. Ask me anything about T-levels!' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, chatOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: 'user', text: input }
    ]);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: 'T-levels are 2-year courses designed for 16-19 year olds, combining classroom learning with industry placements. They are equivalent to 3 A-levels and focus on technical skills for specific careers. Want to know more?' }
      ]);
    }, 600);
    setInput('');
  };

  return (
    <div className="college-homepage">
      {/* Navigation Header */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo-section">
            <img src="/ada-logo.png" alt="Ada National College" className="college-logo" />
            <span className="college-name">Ada National College</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#courses">Courses</a>
            <a href="#admissions">Admissions</a>
            <a href="#contact">Contact</a>
            <div className="login-dropdown" ref={dropdownRef}>
              <button className="login-btn" onClick={handleLoginClick}>
                Login ▼
              </button>
              {showLoginDropdown && (
                <div className="dropdown-menu">
                  <button
                    className="dropdown-item"
                    onClick={() => handleRoleSelect('student')}
                  >
                    Student Login
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => handleRoleSelect('admin')}
                  >
                    Admin Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Shape Your Future with <span className="highlight">Digital Skills</span>
            </h1>
            <p className="hero-subtitle">
              Join Ada National College and unlock your potential in the digital world.
              Our industry-focused T-levels and degree apprenticeships prepare you for
              the careers of tomorrow.
            </p>
            <div className="hero-buttons">
              <button className="cta-primary" onClick={() => handleRoleSelect('student')}>Apply Now</button>
              <button className="cta-secondary">Book Open Day</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <div className="floating-element elem-1">💻</div>
              <div className="floating-element elem-2">🚀</div>
              <div className="floating-element elem-3">⚡</div>
              <div className="floating-element elem-4">🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="about">
        <div className="container">
          <h2 className="section-title">Why Choose Ada National College?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎓</div>
              <h3>Industry-Led Learning</h3>
              <p>Our curriculum is designed with leading tech companies to ensure you learn the skills employers actually need.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💼</div>
              <h3>Real Work Experience</h3>
              <p>45+ weeks of work placement with top employers like Microsoft, Google, and innovative startups.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌟</div>
              <h3>Outstanding Results</h3>
              <p>95% of our graduates progress to university or secure employment within 6 months of graduation.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h3>Personal Support</h3>
              <p>Small class sizes and dedicated mentorship ensure you get the individual attention you deserve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section" id="courses">
        <div className="container">
          <h2 className="section-title">Our T-Level Programmes</h2>
          <div className="courses-grid">
            <div className="course-item featured">
              <div className="course-badge">Most Popular</div>
              <div className="course-icon">💻</div>
              <h3>Digital Production, Design & Development</h3>
              <p>Master web development, app creation, and digital design with cutting-edge technologies.</p>
              <ul className="course-highlights">
                <li>Full-stack web development</li>
                <li>Mobile app development</li>
                <li>UI/UX design principles</li>
                <li>Industry placement guaranteed</li>
              </ul>
              <button className="course-btn" onClick={() => handleCourseClick('digital')}>Learn More</button>
            </div>

            <div className="course-item">
              <div className="course-icon">🔬</div>
              <h3>Health & Science</h3>
              <p>Explore healthcare innovation and scientific research in state-of-the-art facilities.</p>
              <ul className="course-highlights">
                <li>Laboratory techniques</li>
                <li>Healthcare technology</li>
                <li>Research methodologies</li>
                <li>NHS placement opportunities</li>
              </ul>
              <button className="course-btn" onClick={() => handleCourseClick('health')}>Learn More</button>
            </div>

            <div className="course-item">
              <div className="course-icon">⚙️</div>
              <h3>Engineering & Manufacturing</h3>
              <p>Design, build, and innovate with modern engineering principles and advanced manufacturing.</p>
              <ul className="course-highlights">
                <li>CAD design & 3D printing</li>
                <li>Robotics & automation</li>
                <li>Sustainable engineering</li>
                <li>Industry 4.0 technologies</li>
              </ul>
              <button className="course-btn" onClick={() => handleCourseClick('engineering')}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Graduate Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Industry Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">£28K</div>
              <div className="stat-label">Average Starting Salary</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Years to Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-item">
              <div className="testimonial-content">
                <p>"Ada National College gave me the practical skills and confidence I needed. The work placement led directly to my dream job at a tech startup!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍💻</div>
                <div className="author-info">
                  <h4>James Mitchell</h4>
                  <span>Digital T-Level Graduate</span>
                  <div className="author-company">Now at TechFlow Ltd</div>
                </div>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-content">
                <p>"The support from tutors was incredible. They helped me discover my passion for healthcare technology, and now I'm studying Medicine at Cambridge!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍⚕️</div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>Health T-Level Graduate</span>
                  <div className="author-company">Cambridge University</div>
                </div>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-content">
                <p>"The hands-on experience with real engineering projects was amazing. I learned more in 2 years than I thought possible!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍🔧</div>
                <div className="author-info">
                  <h4>Marcus Williams</h4>
                  <span>Engineering T-Level Graduate</span>
                  <div className="author-company">Rolls-Royce plc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join hundreds of students who are already building their future with Ada National College</p>
            <div className="cta-buttons">
              <button className="cta-primary large" onClick={() => handleRoleSelect('student')}>Apply Today</button>
              <button className="cta-secondary large">Book Open Day</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Ada National College</h4>
              <p>Shaping the digital leaders of tomorrow through innovative education and industry partnerships.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>📍 123 Innovation Way, Tech City, TC1 2AB</p>
              <p>📞 0800 123 4567</p>
              <p>✉️ info@ada.ac.uk</p>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Ada National College. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Portal: ensures fixed to viewport, not container */}
      {createPortal(
        <>
          <button
            className="chatbot-fab"
            aria-label="Open chat bot"
            onClick={() => setChatOpen((open) => !open)}
          >
            <svg width="60" height="60" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#4b51a2" />
              <path d="M8 11C8 9.89543 8.89543 9 10 9H22C23.1046 9 24 9.89543 24 11V17C24 18.1046 23.1046 19 22 19H14L10 22V19H10C8.89543 19 8 18.1046 8 17V11Z"
                fill="#fff" />
              <circle cx="12" cy="14" r="1" fill="#4b51a2" />
              <circle cx="16" cy="14" r="1" fill="#4b51a2" />
              <circle cx="20" cy="14" r="1" fill="#4b51a2" />
            </svg>

          </button>
          <p className="t-le"> T-level Chat</p>
          {chatOpen && (
            <div className="chatbot-popup">
              <div className="chatbot-header">
                <span>T-levels Info Bot</span>
                <button className="chatbot-close" onClick={() => setChatOpen(false)}>&times;</button>
              </div>
              <div className="chatbot-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`chatbot-msg chatbot-msg-${msg.from}`}>{msg.text}</div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <form className="chatbot-input-row" onSubmit={handleSend}>
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask about T-levels..."
                  autoFocus
                />
                <button type="submit">Send</button>
              </form>
            </div>
          )}
        </>,
        document.body
      )}
    </div>
  );
};

export default CollegeHomePage;
