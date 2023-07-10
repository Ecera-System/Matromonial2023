const express = require('express');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
// const matchController = require('./controllers/matchController');
const searchRoutes = require('./routes/searchRoutes')
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use('/api', express.static("public"));



// Routes


app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// app.use('/api/match', searchRoutes);
// app.use('/api/connections',authMiddleware, matchController.sendConnectionRequest);



module.exports = app;
