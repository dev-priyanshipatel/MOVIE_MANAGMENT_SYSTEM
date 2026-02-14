import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../api/api";
import toast from "react-hot-toast";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(`${BASE_API_URL}/movies`);
        setMovies(data);
      } catch (err) {
        toast.error("Something Went Wrong. Please try again later.")
      }
    };
    fetchMovies(); 
  }, []);
  return (
    <section className="bg-slate-900 min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white ">
            🎬 Movies Collection
          </h2>
          <Link  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" to={'/add-movie'}>
            Add Movie
          </Link>
        </div>
        <div className="flex flex-wrap -m-4">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Movies;
