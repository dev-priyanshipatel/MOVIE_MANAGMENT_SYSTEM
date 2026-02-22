import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login")
  };

  return (
    <header className="bg-slate-900 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          🎬 Movie<span className="text-blue-500">Manager</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <Link className="text-slate-300 hover:text-blue-400" to="/">
            Home
          </Link>

          <Link className="text-slate-300 hover:text-blue-400" to="/movies">
            Movies
          </Link>
        </nav>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex gap-3">
          {isLoggedIn ? (
            <button
              className="px-4 py-2 border border-blue-400 text-blue-400 rounded-md
          hover:bg-blue-400 hover:text-slate-900 transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-slate-900 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-800 px-6 py-4 space-y-4 z-20">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block text-slate-300 hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="block text-slate-300 hover:text-blue-400"
          >
            Dashboard
          </Link>
          <Link
            to="/movies"
            onClick={() => setOpen(false)}
            className="block text-slate-300 hover:text-blue-400"
          >
            Movies
          </Link>

          <div className="flex gap-3 pt-4">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="w-full text-center px-4 py-2 border border-blue-400 text-blue-400 rounded-md"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="w-full text-center px-4 py-2 border border-blue-400 text-blue-400 rounded-md"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="w-full text-center px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
