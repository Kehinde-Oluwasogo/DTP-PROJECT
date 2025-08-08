import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const AuthForm = ({ role: propRole }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      const result = login(formData.email, formData.password, role);
      if (!result.success) {
        setError(result.message || 'Login failed');
      }
    } else {
      if (role === 'admin') {
        setError('Admin registration is not allowed through this form');
        return;
      }
      
      const result = register(formData);
      if (!result.success) {
        setError(result.message || 'Registration failed');
      }
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>
          {role === 'admin' ? 'Admin' : 'Student'} {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!isLogin && (
          <div className="form-group">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <label htmlFor="date_of_birth">Date of Birth</label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        {role === 'student' && (
          <div className="toggle-form">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Need to sign up?' : 'Already have an account?'}
            </button>
          </div>
        )}

        {role === 'admin' && (
          <div className="demo-credentials">
            <strong>Demo admin credentials:</strong>
            Email: admin@test.com<br />
            Password: any password
          </div>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
