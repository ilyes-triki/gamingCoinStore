import logo from './ressources/icons8-sign-language-h-pulsar-color (1)/icons8-sign-language-h-48.png';
import { Link } from 'react-router-dom';

import './navBar.css';

function Navbar({ user }) {
  const handleDisconnect = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  console.log(user);
  const userInitial = user ? user.user.userName.charAt(0).toUpperCase() : '';
  return (
    <nav className="navbar">
      <img src={logo}></img>
      <ul className="nav-list">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li>Home</li>
        </Link>

        <li>Products</li>
        <li>Contact</li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      {user ? (
        <>
          <li
            className="newLi"
            style={{
              textDecoration: 'none',
              color: 'white',
              listStyle: 'none',
              fontWeight: 'bolder',
              backgroundColor: 'black',
              borderRadius: '23px',
              height: '40px',
              width: '40px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {userInitial}
          </li>
          <div className="auth-buttons">
            <button onClick={handleDisconnect}>Disconnect</button>
          </div>
        </>
      ) : (
        <>
          <div className="auth-buttons">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <button>Signup</button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
