import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import axios from 'axios';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown menu
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // State to store user data

  

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/profile', {
          method: 'GET',
          headers: {
            'Authorization': localStorage.getItem('new_token')
          }
        }); // Replace '/api/users' with the appropriate endpoint URL
        setUsers(response.data);
        response && setLoading(false);
      } catch (error) {
        error && setLoading(false);
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        {
          users.map((data) => <ul key={data._id}>
            <li>
              <h2>Name: {data.name}</h2>
              <h4>Email: {data.email}</h4>
              <p>Gender: {data.gender}</p>
              <p>Birth: {data.dateOfBirth}</p>
              <p>Location: {data.location}</p>
            </li>
          </ul>)
        }
      </div>

    </div>
  );
};

export default AdminDashboard;
