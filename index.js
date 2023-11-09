const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./src/config/config');
const path = require("path");
let corsOptions = { 
  origin : ['http://localhost:3000'], 
} 
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, './public')));
// Connect to MongoDB

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
  

// Middleware
// app.use(helmet());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/user', require('./src/routes/authRoutes'));
// app.use('/api/login', require('./src/routes/authRoutes'));
app.use('/api/profile', require('./src/routes/profileRoutes'));
// Add more routes as needed
app.use(cors());
const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
