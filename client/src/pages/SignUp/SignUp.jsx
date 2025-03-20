import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import axiosInstance from "../../../utils/axisoInstance";
import vector3 from "../../assets/images/vector3.png";
import vector4 from "../../assets/images/vector4.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await axiosInstance.post("/auth/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      toast.success("Signup successful!");
      console.log("User registered:", response.data);

      navigate("/signin");

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed!");
      console.error("Signup error:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0D0D0D] mt-[-4rem] md:mt-auto">
      <img
        src={vector3}
        alt="Vector 3"
        className="absolute top-0 right-0 w-42 md:w-56 md:bottom-0"
      />
      <img
        src={vector4}
        alt="Vector 4"
        className="absolute top-0 left-0 w-42 md:w-56"
      />
      <div className="bg-[#111] p-10 rounded-lg shadow-lg w-96 text-white">
        <h2 className="text-center text-2xl font-bold mb-6">Sign Up</h2>

        {/* OAuth Buttons */}
        <button className="flex items-center justify-center w-full bg-gray-800 py-3 mb-3 rounded-lg text-sm">
          <div className="w-[70%] flex items-center">
            <FaGoogle className="mr-2" /> <span>Continue with Google</span>
          </div>
        </button>
        <button className="flex items-center justify-center w-full bg-gray-800 py-3 mb-4 rounded-lg text-sm">
          <div className="w-[70%] flex items-center">
            <FaFacebookF className="mr-2" /> <span>Continue with Facebook</span>
          </div>
        </button>
        <button className="flex items-center justify-center w-full bg-gray-800 py-3 mb-4 rounded-lg text-sm">
          <div className="w-[70%] flex items-center">
            <FaGithub className="mr-2" /> <span>Continue with Github</span>
          </div>
        </button>

        <p className="text-center text-gray-400 text-sm mb-4">or</p>

        {/* Input Fields */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            autoComplete="off"
            className="w-full p-3 mb-3 rounded-lg bg-gray-800 text-white outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
            className="w-full p-3 mb-3 rounded-lg bg-gray-800 text-white outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="off"
            className="w-full p-3 mb-3 rounded-lg bg-gray-800 text-white outline-none"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="off"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white outline-none"
            required
          />

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={loading} // Disable button when loading
            className={`w-full py-3 rounded-lg text-lg font-semibold ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-br from-[#CE9FFC] to-[#7367F0] hover:scale-95 duration-500"
            }`}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Links */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <span
            className="text-white cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
