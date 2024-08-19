const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Error connecting to MongoDB: ", err.message);
    }
}

module.exports = { dbConnection };
