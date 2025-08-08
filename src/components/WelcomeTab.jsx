import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const WelcomeTab = () => {
  const { currentUser, updateUserProgress } = useAppContext();
  const [completedSections, setCompletedSections] = useState(
    new Set(currentUser?.progress?.sectionsCompleted || [])
  );
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  const toggleSection = (sectionId) => {
    const newCompleted = new Set(completedSections);
    if (newCompleted.has(sectionId)) {
      newCompleted.delete(sectionId);
    } else {
      newCompleted.add(sectionId);
      // Award points for completing a section
      const newPoints = (currentUser?.progress?.totalPoints || 0) + 25;
      updateUserProgress({
        sectionsCompleted: Array.from(newCompleted),
        totalPoints: newPoints
      });
    }
    setCompletedSections(newCompleted);
  };

  const startQuiz = (quizType) => {
    setCurrentQuiz(quizType);
    setQuizAnswers({});
    setShowQuizResult(false);
  };

  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const submitQuiz = () => {
    setShowQuizResult(true);
    // Award points for completing quiz
    const newPoints = (currentUser?.progress?.totalPoints || 0) + 50;
    const quizzesTaken = [...(currentUser?.progress?.quizzesTaken || []), currentQuiz];
    updateUserProgress({
      quizzesTaken,
      totalPoints: newPoints
    });
  };

  const quizQuestions = {
    tlevels: [
      {
        id: 1, 
        question: "What does T-level stand for?",
        options: ["Technical Level", "Teaching Level", "Training Level", "Top Level"],
        correct: 0
      },
      {
        id: 2,
        question: "How long does a T-level qualification typically take?",
        options: ["1 year", "2 years", "3 years", "4 years"],
        correct: 1
      },
      {
        id: 3,
        question: "What percentage of T-level is work placement?",
        options: ["10%", "20%", "30%", "45%"],
        correct: 1
      }
    ]
  };

  const progressPercentage = Math.round((completedSections.size / 4) * 100);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Welcome Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '30px',
        borderRadius: '12px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h2>🎉 Welcome to Your Learning Journey, {currentUser.full_name}!</h2>
        <p style={{ fontSize: '18px', margin: '10px 0' }}>
          Discover the exciting world of T-levels and transform your future with hands-on learning
        </p>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '25px',
          padding: '10px 20px',
          display: 'inline-block',
          marginTop: '15px'
        }}>
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
            📊 Progress: {progressPercentage}% Complete | 🏆 Points: {currentUser?.progress?.totalPoints || 0}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        padding: '5px',
        marginBottom: '30px'
      }}>
        <div style={{
          backgroundColor: '#4CAF50',
          width: `${progressPercentage}%`,
          height: '20px',
          borderRadius: '8px',
          transition: 'width 0.3s ease'
        }}></div>
      </div>

      {/* What are T-levels Section */}
      <div className="welcome-section">
        <div className="section-header" onClick={() => toggleSection('tlevels')}>
          <h3>🎯 What are T-levels?</h3>
          <span className={`completion-badge ${completedSections.has('tlevels') ? 'completed' : ''}`}>
            {completedSections.has('tlevels') ? '✅' : '📖'}
          </span>
        </div>
        <div className="section-content">
          <div style={{
            backgroundColor: '#e3f2fd',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
              <strong>T-levels</strong> are new 2-year qualifications that combine classroom learning with hands-on work experience. 
              They're designed to give you the skills that employers want and a head start in your career!
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h4>45+ Weeks Work Placement</h4>
              <p>Real workplace experience with industry partners</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h4>University Entry</h4>
              <p>T-levels count as 3 A-levels for university admission</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h4>Job Ready Skills</h4>
              <p>Develop technical and professional skills employers value</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h4>Career Progression</h4>
              <p>Clear pathways to apprenticeships and employment</p>
            </div>
          </div>

          <button 
            className="quiz-btn"
            onClick={() => startQuiz('tlevels')}
            style={{ marginTop: '20px' }}
          >
            🧠 Test Your Knowledge!
          </button>
        </div>
      </div>

      {/* Available Courses Section */}
      <div className="welcome-section">
        <div className="section-header" onClick={() => toggleSection('courses')}>
          <h3>📚 Available T-level Courses</h3>
          <span className={`completion-badge ${completedSections.has('courses') ? 'completed' : ''}`}>
            {completedSections.has('courses') ? '✅' : '📖'}
          </span>
        </div>
        <div className="section-content">
          <div className="courses-grid">
            <div className="course-card popular">
              <div className="course-badge">🔥 Most Popular</div>
              <h4>Digital Production, Design & Development</h4>
              <p>Create websites, apps, and digital content using cutting-edge technology</p>
              <div className="course-stats">
                <span>👥 150+ students enrolled</span>
                <span>⭐ 4.8/5 rating</span>
              </div>
            </div>
            
            <div className="course-card">
              <h4>Health & Science</h4>
              <p>Explore healthcare careers and scientific research methodologies</p>
              <div className="course-stats">
                <span>👥 120+ students enrolled</span>
                <span>⭐ 4.9/5 rating</span>
              </div>
            </div>
            
            <div className="course-card">
              <h4>Engineering & Manufacturing</h4>
              <p>Design, build, and innovate with modern engineering principles</p>
              <div className="course-stats">
                <span>👥 95+ students enrolled</span>
                <span>⭐ 4.7/5 rating</span>
              </div>
            </div>
            
            <div className="course-card">
              <h4>Education & Early Years</h4>
              <p>Shape young minds and make a difference in education</p>
              <div className="course-stats">
                <span>👥 80+ students enrolled</span>
                <span>⭐ 4.8/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why T-levels Section */}
      <div className="welcome-section">
        <div className="section-header" onClick={() => toggleSection('benefits')}>
          <h3>💡 Why Choose T-levels?</h3>
          <span className={`completion-badge ${completedSections.has('benefits') ? 'completed' : ''}`}>
            {completedSections.has('benefits') ? '✅' : '📖'}
          </span>
        </div>
        <div className="section-content">
          <div className="benefits-container">
            <div className="benefit-item">
              <div className="benefit-number">1</div>
              <div className="benefit-content">
                <h4>Industry Recognition</h4>
                <p>T-levels are developed with employers, so you learn exactly what industry needs</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-number">2</div>
              <div className="benefit-content">
                <h4>Practical Experience</h4>
                <p>45+ weeks of work placement means you graduate with real work experience</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-number">3</div>
              <div className="benefit-content">
                <h4>Higher Earnings</h4>
                <p>T-level graduates earn 20% more on average compared to other Level 3 qualifications</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-number">4</div>
              <div className="benefit-content">
                <h4>Flexible Pathways</h4>
                <p>Continue to university, start an apprenticeship, or jump straight into employment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="welcome-section">
        <div className="section-header" onClick={() => toggleSection('stories')}>
          <h3>🌟 Student Success Stories</h3>
          <span className={`completion-badge ${completedSections.has('stories') ? 'completed' : ''}`}>
            {completedSections.has('stories') ? '✅' : '📖'}
          </span>
        </div>
        <div className="section-content">
          <div className="stories-grid">
            <div className="story-card">
              <div className="student-avatar">👨‍💻</div>
              <h4>James, Digital T-level Graduate</h4>
              <p>"My T-level placement at a tech startup led to a full-time job offer before I even graduated! The hands-on experience was invaluable."</p>
              <div className="story-outcome">💼 Now: Junior Web Developer at TechFlow</div>
            </div>
            
            <div className="story-card">
              <div className="student-avatar">👩‍⚕️</div>
              <h4>Sarah, Health T-level Graduate</h4>
              <p>"The work placement in a hospital opened my eyes to so many career possibilities. I'm now studying Medicine at university!"</p>
              <div className="story-outcome">🎓 Now: Medical Student at Cambridge</div>
            </div>
            
            <div className="story-card">
              <div className="student-avatar">👨‍🔧</div>
              <h4>Marcus, Engineering T-level Graduate</h4>
              <p>"T-levels gave me practical skills that university students don't have. Employers love the real-world experience."</p>
              <div className="story-outcome">🏭 Now: Design Engineer at Rolls-Royce</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      {currentQuiz && (
        <div className="quiz-modal">
          <div className="quiz-content">
            <h3>🧠 T-levels Knowledge Quiz</h3>
            {!showQuizResult ? (
              <>
                {quizQuestions[currentQuiz].map((q, index) => (
                  <div key={q.id} className="quiz-question">
                    <h4>Question {index + 1}: {q.question}</h4>
                    <div className="quiz-options">
                      {q.options.map((option, optIndex) => (
                        <label key={optIndex} className="quiz-option">
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={optIndex}
                            onChange={() => handleQuizAnswer(q.id, optIndex)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="quiz-actions">
                  <button className="btn btn-primary" onClick={submitQuiz}>
                    Submit Quiz
                  </button>
                  <button className="btn btn-secondary" onClick={() => setCurrentQuiz(null)}>
                    Close
                  </button>
                </div>
              </>
            ) : (
              <div className="quiz-result">
                <h4>🎉 Great job completing the quiz!</h4>
                <p>You're building your knowledge about T-levels. Keep exploring to learn more!</p>
                <button className="btn btn-primary" onClick={() => {
                  setCurrentQuiz(null);
                  toggleSection('tlevels');
                }}>
                  Continue Learning
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Achievement Badge */}
      {progressPercentage === 100 && (
        <div className="achievement-popup">
          <div className="achievement-content">
            <h3>🏆 Achievement Unlocked!</h3>
            <p>Welcome Pathway Complete</p>
            <p>You're ready to explore podcasts and open days!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeTab;
