import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../api/api';
import toast from 'react-hot-toast';

const LogIn = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();

    if (input.email.trim() === "") {
      toast.error("Please Enter Valid Email..");
      return;
    }
    if (input.password.trim() === "") {
      toast.error("Please Create Your password...");
      return;
    }

    try {
      const { data } = await axios.get(
        `${BASE_API_URL}/users?email=${input.email}&password=${input.password}`,
      );
      if (data.length === 0) {
        toast.error("Invalid username or Password");
        return;
      }
       const id = data[0].id;
        localStorage.setItem("userId", id);
        navigate('/')
        toast.success("Login successful");
        setInput({email:'', password:''})
      }
     catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bgimg.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center">
            Welcome Back
          </h2>
          <p className="text-slate-300 text-center mt-2">
            Login to MovieManager
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleLogIn}>
            <div>
              <label className="block text-slate-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-slate-300 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LogIn