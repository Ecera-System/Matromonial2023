import React, { useState } from 'react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to handle the form submission
    // For example, you can send an API request to validate the credentials
    if (username === 'admin' && password === 'password') {
      // Successful login
      console.log('Logged in as admin');
      setErrorMessage('');
    } else {
      // Invalid credentials
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
