import React, { useState, useEffect } from 'react';
import { getUserProfile, sendConnectionRequest } from '../services/authService';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [matchedUser, setMatchedUser] = useState([]);
  const [connectionId, setConnectionId] = useState('');

  const userToken = localStorage.getItem('new_token');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile(userToken);
        setUser(userProfile?.data);
      } catch (error) {
        error?.response?.data?.message && alert(error.response.data.message);
      }
    };

    fetchUserProfile();
  }, []);


  const handleConnectionFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendConnectionRequest(user.id, connectionId, userToken);
      alert('Connection request sent successfully!');
    } catch (error) {
      error?.response?.data?.message && alert(error.response.data.message);
    }

    setConnectionId('');
  };

  if (!user) {
    return <div>Loading...</div>;
  }


  const handleSearch = async (event) => {
    event.preventDefault();
    const age = event.target.elements.age.value;
  const gender = event.target.elements.gender.value;

    try {
      const res = await axios.get(`http://localhost:3001/api/users/search?age=${age}&gender=${gender}`, {
        
        headers: {
          'Authorization': userToken,
        },
      })
      setMatchedUser(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Welcome, {user?.name}!</h2>
      <p>Email: {user?.email}</p>
      <p><h2>Get matched with the user you want </h2> </p>
      {/* Form to search for matches */}
      <form id="searchForm" onSubmit={handleSearch}>
        <input type="number" name="age" placeholder="Age" />
        <input type="text" name="gender" placeholder="Gender" />
        <button type="submit">Search</button>
      </form>

      {matchedUser.length === 0 ?
        <p></p> :
        matchedUser.map((data) => <ul key={data._id}>
          <li>
            <h2>{data.name}</h2>
            <p>Location: {data.location}</p>
            
            <button onClick={() => sendConnectionRequest(user.id, data._id, userToken)}>Send Connection Request</button>
          </li>
        
        </ul>)
      }
     


     
      
    </div>
  );
};

export default Profile;
