import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Default Route
app.get("/", (req, res) => {
  res.send("Waitly Server is Running 🚀");
});

// Connect to MongoDB
connectDB();
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected ✅"))
//   .catch((err) => console.log("MongoDB Connection Error ❌", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
