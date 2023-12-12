import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/user/login',
        formData
      );

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        console.log('Login successful!');
        history.push('/');
        window.alert('User registered successfully!');
        window.location.reload();
      } else {
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="button-container">
          <button type="submit">Submit</button>

          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <button type="button" className="signup-button">
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
