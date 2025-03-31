import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { signup, signin } from "../controllers/authController.js";
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Function to generate JWT
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Signup & Signin Routes
router.post("/signup", signup);
router.post("/signin", signin);

// Google OAuth Routes
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`http://localhost:3000/oauth-success?token=${token}`);
  }
);

// GitHub OAuth Routes
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", { session: false }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`http://localhost:3000/oauth-success?token=${token}`);
  }
);

export default router;
