import React, { useState } from 'react';
import { loginUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(formData);
      if (result?.token) {
        localStorage.setItem( 'new_token', result.token);


        
        navigate('/profile');
      }
      else {
        alert('Unauthorized User');
      }

      // Handle successful login, e.g., redirect to profile page
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
