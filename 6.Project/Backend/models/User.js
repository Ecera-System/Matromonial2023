const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true,
    },
    bio: {
        type: String,
        default: '',
    },
    location: {
        type: String,
        default: '',
    },
  
    // Add fields for match functionality
  age: { 
    type: Number
   },
  gender: 
  { type: String 
  },
  // Other match-related fields
  connections:
   [{ type: mongoose.Schema.Types.ObjectId,
     ref: 'User' ,
     }],


    },

  
  {
    timestamps: true,
  }
    
 
);


const User = mongoose.model('User', userSchema);

module.exports = User;
