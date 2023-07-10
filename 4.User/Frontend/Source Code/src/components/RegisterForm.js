import React, { useState } from 'react';
import { registerUser } from '../services/authService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './RegisterForm.css'; // Import CSS file for styling

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: null,
    gender: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateOfBirth: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await registerUser(formData);
      // Handle successful registration, e.g., redirect to login page
    } catch (error) {
      // Handle registration error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div>
        <h1>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </h1>
      </div>
      <div>
        <h1>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </h1>
      </div>
      <div>
        <h1>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </h1>
      </div>
      <div>
        <h1>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <DatePicker
            id="dateOfBirth"
            name="dateOfBirth"
            selected={formData.dateOfBirth}
            onChange={handleDateChange}
            placeholderText="Select Date"
          />
        </h1>
      </div>
      <div>
        <h1>
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </h1>
      </div>
      <div>
        <h1>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
        </h1>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
