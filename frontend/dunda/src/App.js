import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform Login logic here
    setIsLoggedIn(true);
  };

  const handleSignUp = () => {
    // Perform Signup logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  const renderLoginForm = () => {
    return (
      <div>
        <h2>Login</h2>
        <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };

  const renderSignupForm = () => {
    return (
      <div>
        <h2>Sign Up</h2>
        <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    );
  };

  const renderLoggedInPage = () => {
    return (
      <div>
        <h2>Welcome, {email}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };

  return (
    <div>
      {isLoggedIn ? renderLoggedInPage() : renderLoginForm()}
      {!isLoggedIn && renderSignupForm()}
    </div>
  );
}

export default App;
