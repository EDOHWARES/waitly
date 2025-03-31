import User from "../models/User.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import dotenv from 'dotenv';

dotenv.config();

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const signup = async (req, res) => {
  const { fullName, email, password, confirmPassword, provider, providerId } = req.body;

  try {
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      // If user exists but from a different provider, return error
      if (!existingUser[`${provider}Id`]) {
        return res.status(400).json({ message: "Email is already registered with a different provider." });
      }
      return res.status(200).json({ message: "User already exists", token: generateToken(existingUser._id) });
    }

    let newUser;
    
    if (provider) {
      // OAuth Signup (Google, GitHub, etc.)
      newUser = new User({ fullName, email, [`${provider}Id`]: providerId });
    } else {
      // Email/Password Signup
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      newUser = new User({ fullName, email, password: hashedPassword });
    }

    await newUser.save();
    res.status(201).json({ message: "Signup successful", token: generateToken(newUser._id) });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Prevent OAuth users from signing in with a password
    if (!user.password) {
      return res.status(400).json({ message: "Please sign in using OAuth." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Signin successful", token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};
