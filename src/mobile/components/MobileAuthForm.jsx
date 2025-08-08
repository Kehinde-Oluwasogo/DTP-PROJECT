import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';

const MobileAuthForm = ({ role: propRole }) => {
  const { login, register } = useAppContext();
  const [role, setRole] = useState(propRole);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    date_of_birth: '',
    password: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if role was selected from homepage dropdown
    const selectedRole = sessionStorage.getItem('selectedRole');
    if (selectedRole) {
      setRole(selectedRole);
      sessionStorage.removeItem('selectedRole'); // Clean up
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await login(formData.email, formData.password, role);
      } else {
        if (!formData.full_name || !formData.date_of_birth) {
          setError('Please fill in all fields');
          return;
        }
        await register(formData, role);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="mobile-auth-container">
      <form onSubmit={handleSubmit} className="mobile-auth-form">
        <h2 className="mobile-auth-title">
          {role === 'admin' ? 'Admin' : 'Student'} {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        
        {error && (
          <div className="mobile-error-message">
            {error}
          </div>
        )}

        {!isLogin && (
          <div className="mobile-form-group">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleInputChange}
              required
              className="mobile-form-input"
            />
          </div>
        )}

        <div className="mobile-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mobile-form-input"
          />
        </div>

        {!isLogin && (
          <div className="mobile-form-group">
            <label htmlFor="date_of_birth">Date of Birth</label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleInputChange}
              required
              className="mobile-form-input"
            />
          </div>
        )}

        <div className="mobile-form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="mobile-form-input"
          />
        </div>

        <button type="submit" className="mobile-btn mobile-btn-primary">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        {role === 'student' && (
          <div className="mobile-toggle-form">
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Need to sign up?' : 'Already have an account?'}
            </button>
          </div>
        )}

        {role === 'admin' && (
          <div className="mobile-demo-credentials">
            <strong>Demo admin credentials:</strong><br />
            Email: admin@test.com<br />
            Password: any password
          </div>
        )}
      </form>
    </div>
  );
};

export default MobileAuthForm;
