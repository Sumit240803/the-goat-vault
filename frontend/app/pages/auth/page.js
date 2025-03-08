"use client";
import { login, register, setToken } from "@/app/utils/authUtils";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

const Auth = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation before API call
    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      console.error("All required fields must be filled!");
      return;
    }

    try {
      if (isLogin) {
        console.log("Logging in...");
        const loginUser = await login(formData.email, formData.password);
        if (loginUser) {
          setToken(loginUser.token).then(()=> router.replace("/pages/account")).catch(err=>{console.log(err)})

          
          //console.log("Login successful:", loginUser);
          setFormData({ email: "", password: "", name: "" }); 
        }
      } else {
        console.log("Registering...");
        const registerUser = await register(formData.name, formData.email, formData.password);
        if (registerUser) {
          setToken(registerUser.token).then(e=>{console.log(e)}).catch(err=>{console.log(err)})
        //  console.log("Registration successful:", registerUser);
          setFormData({ email: "", password: "", name: "" });
          setIsLogin(true); 
        }
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
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
            className="mt-4 text-pink-600 cursor-pointer text-center text-sm"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          {/* Text Overlay */}
          <div className="absolute top-1/3 md:top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl text-center w-full text-white font-bold">
            The Goat Vault
          </div>
          <div className="absolute top-2/3 md:top-[70%] text-lg md:text-xl text-center w-full text-white z-50">
            Where Brands Are Within The Reach
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Background Image */}
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
