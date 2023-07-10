import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://localhost:3001')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Handle error state if necessary
      });
  }, []);

  return (
    <div>
      
      <h2>Admin Dashboard</h2>
      <h3>User List</h3>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
