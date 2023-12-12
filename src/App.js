import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navBar/navBar';
import MidSection from './midSection/midSection';
import Login from './login/login';
import Signup from './signup/signup';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(localStorage);
        if (!token) {
          setUser(null);
          console.error('No token found.');
          return;
        }
        const headers = {
          Authorization: `${token}`,
        };
        const response = await axios.get(
          'http://localhost:5000/user/userProfile',
          {
            headers,
          }
        );

        if (response.status === 200) {
          setUser(response.data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching current user:', error);
        setUser(null);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar user={user} />
        </header>
        <main className="App-main">
          <Switch>
            <Route path="/" exact component={MidSection} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </main>
        <footer>
          <p>&copy; 2023 My Game Store</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
