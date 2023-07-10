require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getUserById = async (req, res) => {
  const userId = req.params.id; // Assuming the user ID is passed as a parameter in the request

  try {
    // Implement your user retrieval logic here, e.g., interacting with a database
    const user = await user.findById(userId); // Assuming you have a "User" model or collection

    if (!user) {
      // If the user is not found, return a 404 response
      return res.status(404).json({ error: 'User not found' });
    }

    // If the user is found, return the user data
    return res.json(user);
  } catch (error) {
    // If there is an error, return an error response
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const updateUserById = async (req, res) => {
  const userId = req.params.id; // Assuming the user ID is passed as a parameter in the request
  const updateData = req.body; // Assuming the update data is provided in the request body

  try {
    // Implement your user update logic here, e.g., interacting with a database
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (!updatedUser) {
      // If the user is not found, return a 404 response
      return res.status(404).json({ error: 'User not found' });
    }

    // If the user is successfully updated, return the updated user data
    return res.json(updatedUser);
  } catch (error) {
    // If there is an error, return an error response
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const searchUsers = async (req, res) => {
  try {
    const { age, gender } = req.query;
    const dateOfBirth = new Date();
    dateOfBirth.setFullYear(dateOfBirth.getFullYear() - age);
    
    // Add additional search criteria if needed
    const result = await User.find({
      dateOfBirth: { $lte: dateOfBirth },
      gender: gender // Filter by the specified gender
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};


module.exports = { getUserById, updateUserById, searchUsers };