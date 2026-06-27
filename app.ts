// src/app.ts

import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// Routes
import rootRoutes from "./root.router";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
app.use("/api", rootRoutes);

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Todo API Running",
  });
});

// Error Handler
// app.use(errorMiddleware);

export default app;