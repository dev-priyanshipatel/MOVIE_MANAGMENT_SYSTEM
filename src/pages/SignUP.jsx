import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../api/api';

const SignUP = () => {
    const [input, setInput] = useState({
        name :'', email:'', password:'', confirmPassword:''
    });

    const handleChange = (e) => {
        setInput({...input, [e.target.id] : e.target.value})    
    }
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        const emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if(input.name.trim() === ""){
            toast.error("Please Enter Your name...");
            return;
        }
        if (input.email.trim() === "" || !emailRgx.test(input.email.trim())) {
          toast.error("Please Enter Valid Email..");
          return;
        }
        if(input.password.trim() === ""){
            toast.error("Please Create Your password...");
            return;
        }
        if(input.confirmPassword.trim()  !== input.password.trim()){
            toast.error('Confirm Password should same as Password.. ');
            return;
        }

        await axios.post(`${BASE_API_URL}/users`, input);
        navigate('/login');
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
            Create Account
          </h2>
          <p className="text-slate-300 text-center mt-2">
            Join MovieManager today
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSignIn} noValidate>
            <div>
              <label className="block text-slate-300 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={input.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={input.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={input.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label
                className="block text-slate-300 mb-1"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={input.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500"
                placeholder="Confirm password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-slate-300 mt-6">
            Already have an account?
            <Link to="/login" className="text-blue-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUP