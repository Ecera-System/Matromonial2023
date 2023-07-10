import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Replace with your backend API base URL


 axios.get('http://localhost:3001/api')
   .then(response => {
    // Handle the response from the backend
    console.log(response.data);
   })
   .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });


export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const loginUser = async (userData) => {

  const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
  console.log(response);
  return response.data;

};

export const getUserProfile = async (userToken) => {

  const response = await axios.get(`${API_BASE_URL}/profile/single`, {
    method: 'GET',
    headers: {
      'Authorization': userToken
    }
  });
  return response;

};




// Function to send a connection request
export const sendConnectionRequest = async (userId, connectionId, userToken) => {
  try {
    const response = await axios.post(
      `/api/users/${userId}/connections`,
      { connectionId },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return response.data;
    
  } catch (error) {
    throw error;
  }
};

