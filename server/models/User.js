import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    sparse: true, // Allows OAuth users with no email (e.g., GitHub)
  },
  password: {
    type: String,
    minlength: 5,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  githubId: {
    type: String,
    unique: true,
    sparse: true,
  },
  facebookId: {
    type: String,
    unique: true,
    sparse: true,
  },
});

// Ensure at least one authentication method (password or OAuth ID) exists
userSchema.pre("save", function (next) {
  if (!this.password && !this.googleId && !this.githubId && !this.facebookId) {
    return next(new Error("Password or OAuth ID is required"));
  }
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
