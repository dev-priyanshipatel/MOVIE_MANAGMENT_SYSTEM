import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { BASE_API_URL } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

const MovieCardWithActions = ({ movie, fetchMovies }) => {
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure, You want to delete movie ?");
        if(!confirmDelete) return;

        try {
            await axios.delete(`${BASE_API_URL}/movies/${id}`);
            toast.success("Movie deleted successfully...");
            fetchMovies();
        } catch (error) {
            toast.error("Delete failed")
        }
    }
  return (
    <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex justify-center">
      <div className="w-full max-w-[370px] bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300 shadow-md">
        {/* Poster */}
        <div className="relative aspect-[2/3] bg-slate-700 overflow-hidden">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className="text-base font-semibold text-white line-clamp-1">
            {movie.title}
          </h3>

          <p className="text-slate-400 text-sm line-clamp-2">
            {movie.description}
          </p>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
              {movie.genre}
            </span>
            <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded-full">
              {movie.language}
            </span>
          </div>

          <div className="text-yellow-400 font-semibold text-sm">
            ⭐ {movie.rating}/10
          </div>
          <div className="flex gap-2 pt-3">
            <Link className="flex-1 text-center bg-blue-500 text-white text-sm py-1 rounded" to={`/edit-movie/${movie.id}`}>
              Edit
            </Link>

            <button
              onClick={() => {handleDelete(movie.id)}}
              className="flex-1 bg-red-500 text-white text-sm py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardWithActions;
