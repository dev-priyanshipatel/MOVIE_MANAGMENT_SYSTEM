import React, { useEffect, useState } from 'react'
import MainBanner from '../components/MainBanner'
import MovieCard from '../components/MovieCard';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BASE_API_URL } from '../api/api';
import { Link } from 'react-router-dom';

const Home = () => {

  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(`${BASE_API_URL}/movies`);
      setMovies(data);
    } catch (err) {
      toast.error("Something Went Wrong. Please try again later.");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [movies]);
  return (
    <div>
      <MainBanner />
      <div className="py-28 bg-slate-900">
        <div className="container mx-auto">
          <div className='flex mb-7 justify-between'>
            <h2 className="text-left text-white text-5xl">
              Explore Movies..
            </h2>
            <Link
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              to={"/add-movie"}
            >
              Add Movie
            </Link>
          </div>
          <div className="flex flex-wrap -m-4">
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home