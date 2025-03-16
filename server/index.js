const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


connectDB();

// Default Route
app.get("/", (req, res) => {
    res.send("🚀 API is Running...");
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
