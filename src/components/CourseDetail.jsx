import React from 'react';
import { useAppContext } from '../context/AppContext';

const COURSE_DETAILS = {
  digital: {
    title: 'Digital Production, Design & Development',
    icon: '💻',
    description: 'Master web development, app creation, and digital design with cutting-edge technologies.',
    highlights: [
      'Full-stack web development',
      'Mobile app development',
      'UI/UX design principles',
      'Industry placement guaranteed',
    ],
    career: [
      'Software Developer',
      'Web Developer',
      'Mobile App Developer',
      'UX/UI Designer',
      'Digital Product Manager',
      'DevOps Engineer'
    ],
    details: `\
This T-level covers a wide range of digital skills, including:
- Frontend and backend web development
- Mobile app creation
- User interface and user experience design
- Real-world projects and industry placements\
\
You will learn to build modern web and mobile applications, work with databases, and collaborate in teams. The course is designed with input from leading tech companies to ensure you gain the skills employers need.\
\
**Duration:** 2 years\
**Entry Requirements:** 5 GCSEs including English and Maths\
**Placement:** Guaranteed with top tech employers\
    `
  },
  health: {
    title: 'Health & Science',
    icon: '🔬',
    description: 'Explore healthcare innovation and scientific research in state-of-the-art facilities.',
    highlights: [
      'Laboratory techniques',
      'Healthcare technology',
      'Research methodologies',
      'NHS placement opportunities',
    ],
    career: [
      'Clinical Laboratory Technician',
      'Healthcare Data Analyst',
      'Research Assistant',
      'Medical Technology Specialist',
      'Healthcare Innovation Manager'
    ],
    details: `\
This T-level prepares you for a career in health or science, covering:
- Laboratory and research skills
- Healthcare technology and innovation
- Placement opportunities with the NHS and private labs\
\
You will gain hands-on experience in modern labs and learn from industry professionals.\
\
**Duration:** 2 years\
**Entry Requirements:** 5 GCSEs including Science, English, and Maths\
**Placement:** NHS and partner organizations\
    `
  },
  engineering: {
    title: 'Engineering & Manufacturing',
    icon: '⚙️',
    description: 'Design, build, and innovate with modern engineering principles and advanced manufacturing.',
    highlights: [
      'CAD design & 3D printing',
      'Robotics & automation',
      'Sustainable engineering',
      'Industry 4.0 technologies',
    ],
    career: [
      'Manufacturing Engineer',
      'CAD Designer',
      'Robotics Technician',
      'Production Manager',
      'Quality Control Engineer',
      'Automation Specialist'
    ],
    details: `\
This T-level focuses on engineering and manufacturing, including:
- Computer-aided design (CAD) and 3D printing
- Robotics, automation, and Industry 4.0
- Sustainable engineering practices\
\
You will work on real engineering projects and gain experience with the latest technology.\
\
**Duration:** 2 years\
**Entry Requirements:** 5 GCSEs including Maths and Science\
**Placement:** Leading engineering firms\
    `
  }
};

const CourseDetail = () => {
  const { selectedCourseId, setCurrentView, setSelectedCourseId } = useAppContext();
  
  if (!selectedCourseId) {
    setCurrentView('homepage');
    return null;
  }

  const course = COURSE_DETAILS[selectedCourseId];
  if (!course) {
    console.log('Course not found:', selectedCourseId);
    setCurrentView('homepage');
    return null;
  }

  const handleApply = () => {
    setSelectedCourseId(null);
    sessionStorage.setItem('selectedRole', 'student');
    setCurrentView('dashboard');
  };

  const handleBack = () => {
    setSelectedCourseId(null);
    setCurrentView('homepage');
  };

  return (
    <div className="page-container">
      <div className="course-detail-page">
        <button className="back-btn" onClick={handleBack}>
          <span className="back-arrow">←</span> Back to Courses
        </button>
        
        <div className="course-detail-content">
          {/* Header Section */}
          <div className="course-header">
            <div className="course-icon-large">{course.icon}</div>
            <div className="course-title-group">
              <h1 className="course-title">{course.title}</h1>
              <p className="course-description">{course.description}</p>
            </div>
          </div>

          {/* Key Information */}
          <div className="key-info-grid">
            <div className="key-info-item">
              <span className="info-icon">📚</span>
              <h3>Duration</h3>
              <p>2 Years Full-Time</p>
            </div>
            <div className="key-info-item">
              <span className="info-icon">🎓</span>
              <h3>Qualification</h3>
              <p>Level 3 T-Level</p>
            </div>
            <div className="key-info-item">
              <span className="info-icon">💼</span>
              <h3>Industry Placement</h3>
              <p>45 days minimum</p>
            </div>
            <div className="key-info-item">
              <span className="info-icon">🎯</span>
              <h3>UCAS Points</h3>
              <p>Up to 168</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="course-content-grid">
            {/* Left Column */}
            <div className="course-main-content">
              <div className="content-section">
                <h2>Course Overview</h2>
                <div className="course-details-text">
                  {course.details.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="content-section">
                <h2>Key Features</h2>
                <ul className="course-highlights">
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx}><span className="highlight-icon">✓</span> {highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="course-sidebar">
              <div className="career-paths-section">
                <h2>Career Pathways</h2>
                <ul className="career-list">
                  {course.career && course.career.map((career, idx) => (
                    <li key={idx}>
                      <span className="career-icon">👨‍💼</span>
                      {career}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="apply-section">
                <div className="application-card">
                  <h3>Ready to Begin Your Journey?</h3>
                  <p>Join us and unlock your potential in {course.title}</p>
                  <button className="apply-btn" onClick={handleApply}>
                    Apply Now
                  </button>
                  <div className="application-info">
                    <p><strong>Next Intake:</strong> September 2025</p>
                    <p><strong>Application Deadline:</strong> July 31, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
