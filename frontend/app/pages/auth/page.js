"use client";
import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Registering...", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-[80%] max-w-5xl bg-white shadow-lg rounded-lg flex overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {isLogin ? "Login" : "Register"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-white border rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-900 text-white p-3 rounded-md transition"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <p
            className="mt-4 text-pink-800 cursor-pointer text-sm"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 relative flex items-center justify-center">
  <div className="absolute top-52 left-1/2 z-50 transform -translate-x-1/2 text-5xl text-center w-full text-white font-bold">
    The Goat Vault
  </div>
  <div className="absolute z-50 top-72 text-xl text-center w-full text-white ">Where Brands Are Within The Reach</div>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <img
    src="/products/7.jpg" // Change this to your actual image path
    alt="Auth Illustration"
    className="w-full h-full object-cover"
  />
</div>

      </div>
    </div>
  );
};

export default Auth;
