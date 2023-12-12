import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './signup.css';

const SignUpPage = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    userName: '',
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
        'http://localhost:5000/user/register',
        formData
      );

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        console.log('User registered successfully!');
        history.push('/');
        window.location.reload();
        window.alert('User registered successfully!');
      } else {
        console.error('Registration failed.', response);
        window.alert(`Registration failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
    }
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter your username"
          value={formData.userName}
          onChange={handleChange}
        />

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

          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button type="button" className="login-button">
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
