const express = require('express');
const mongoose = require('mongoose');
const authMiddleware = require('./middlewares/authMiddleware');
const adminController =require('./controllers/adminController');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());



app.use(cors())




// Routes
app.get('/public', authMiddleware, (req, res) => {
  res.send('API is running');
});



app.post('/register', (req, res) => {
  // Handle the registration logic here
});


// Authentication routes
app.use('/api/auth', require('./routes/authRoutes'));

// User routes
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use('/api/admin', require('./routes/adminRoutes'));




// Connect to the database
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Terminate the server in case of connection error
  });




module.exports = app;
