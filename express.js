// server.js (or app.js)
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');




const routes = require('./routes/studyPlannerRoutes');

dotenv.config();

const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("Error connecting to MongoDB: ", err));

// Route Definitions
app.use('/api/v1/studyplanners',routes);

// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(4000, () => {
  console.log(`Server connected to port: 4000`);
});
