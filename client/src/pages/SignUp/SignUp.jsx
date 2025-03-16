import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import vector3 from "../../assets/images/vector3.png";
import vector4 from "../../assets/images/vector4.png";

const SignUp = () => {
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
        <h2 className="text-center text-2xl font-bold mb-6">Sign Up.</h2>

        {/* OAuth Buttons */}
        <button className="flex items-center justify-center w-full bg-gray-800 py-3 mb-3 rounded-lg text-sm">
          <FaGoogle className="mr-2" /> Continue with Google
        </button>
        <button className="flex items-center justify-center w-full bg-gray-800 py-3 mb-4 rounded-lg text-sm">
          <FaFacebookF className="mr-2" /> Continue with Facebook
        </button>

        <p className="text-center text-gray-400 text-sm mb-4">or</p>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-3 rounded-lg bg-gray-900 text-white outline-none"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-3 mb-3 rounded-lg bg-gray-900 text-white outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 rounded-lg bg-gray-900 text-white outline-none"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 rounded-lg bg-gray-900 text-white outline-none"
        />

        {/* Sign Up Button */}
        <button className="w-full bg-gradient-to-br from-[#CE9FFC] to-[#7367F0] py-3 rounded-lg text-lg font-semibold">
          Sign Up.
        </button>

        {/* Links */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <span className="text-white cursor-pointer">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
