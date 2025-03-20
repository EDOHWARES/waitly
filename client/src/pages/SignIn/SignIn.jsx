import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import vector3 from "../../assets/images/vector3.png";
import vector4 from "../../assets/images/vector4.png";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axisoInstance";
import { toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/auth/signin", {
        email,
        password,
      });

      if (response.data) {
        toast.success("Signed in successfully!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
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
        <h2 className="text-center text-2xl font-bold mb-6">Sign In.</h2>

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
        <input
          type="email"
          autoComplete="off"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-gray-800 text-white outline-none"
        />
        <input
          type="password"
          autoComplete="off"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white outline-none"
        />

        {/* Sign In Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-br from-[#CE9FFC] to-[#7367F0] py-3 rounded-lg text-lg font-semibold"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In."}
        </button>

        {/* Links */}
        <Link to={"/signup"}>
          <p className="text-center text-gray-400 text-sm mt-4">
            Don’t have an account?{" "}
            <span className="text-white cursor-pointer">Create an account</span>
          </p>
        </Link>

        <p className="text-center text-[#CE9FFC] cursor-pointer mt-3">
          Forgot password?
        </p>
      </div>
    </div>
  );
};

export default SignIn;
