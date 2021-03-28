// Imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Setup and Config
const app = express();
dotenv.config();
app.use(cors());

// Import Routes
const placeholderWords = require("./routes/placeholder");

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true , useUnifiedTopology: true }, () => console.log("Connected to DB"));

// App Middlewares
app.use(express.json());

// Route Middlewares
app.use('/api', placeholderWords)

// Listening on port 
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));