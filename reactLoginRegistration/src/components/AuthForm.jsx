import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleToggle = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(isLogin ? 'Login' : 'Register', formData);
    alert(`${isLogin ? 'Login' : 'Registration'} successful!`);
  };

  return (
    <div className="auth-wrapper">
      <div className={`auth-container ${isLogin ? '' : 'active'}`}>
        <div className="welcome-section">
          <h2>{isLogin ? 'Hello, Welcome!' : 'Welcome Back!'}</h2>
          <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
          <button onClick={handleToggle}>
            {isLogin ? 'Register' : 'Login'}
          </button>
        </div>

        <div className="form-section">
          <h2>{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <span className="input-icon">👤</span>
              </div>
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span className="input-icon">✉️</span>
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span className="input-icon">🔒</span>
              </div>
            </div>

            {isLogin && (
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="social-auth">
            <p>Or continue with</p>
            <div className="social-icons">
              <a href="#" className="social-icon">G</a>
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">⚙️</a>
              <a href="#" className="social-icon">in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;