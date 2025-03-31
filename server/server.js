import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routers/auth.js";
import passport from "passport";
import "./config/passport.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// Initialize Passport
app.use(passport.initialize());

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Default Route
app.get("/", (req, res) => {
  res.send("Waitly Server is Running 🚀");
});

app.use("/api/auth", authRoutes);

// Connect to MongoDB
connectDB();
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected ✅"))
//   .catch((err) => console.log("MongoDB Connection Error ❌", err));

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});