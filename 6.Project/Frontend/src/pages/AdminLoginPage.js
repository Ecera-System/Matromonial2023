import React, { useState } from 'react';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Your login logic here
    // Example: Check username and password against a database or API
    if (username === 'admin' && password === 'admin123') {
      // Successful login, redirect to admin dashboard or protected route
      console.log('Logged in as admin');
    } else {
      // Invalid credentials, display an error message
      console.log('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
