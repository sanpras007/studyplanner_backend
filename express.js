// server.js (or app.js)
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("Error connecting to MongoDB: ", err));

// Route Definitions
app.use('/api/v1/studyplanners', require('./routes/studyplannerRoutes'));

// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(4000, () => {
  console.log(`Server connected to port: 4000`);
});
