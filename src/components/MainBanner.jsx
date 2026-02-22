import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MainBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4')",
        }}
      />

      
      <div className="absolute inset-0 bg-slate-900/70" />

      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 md:p-14 text-center">
          <p className="text-blue-400 uppercase tracking-widest text-sm">
            Movie Management System
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            Organize, Track & Control
            <br />
            <span className="text-blue-500">Your Movie Collection</span>
          </h1>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-lg">
            A modern platform to manage movies efficiently using React, Tailwind
            CSS, and JSON Server. Built for performance and simplicity.
          </p>

          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Open Dashboard
            </Link>

            <Link
              to="/movies"
              className="px-8 py-3 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-slate-900 transition"
            >
              Browse Movies
            </Link>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default MainBanner;
