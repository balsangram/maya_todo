// src/server.ts

import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDB from "./src/config/db";

// Database
connectDB();

// Start Background Jobs
// startTaskScheduler();

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});