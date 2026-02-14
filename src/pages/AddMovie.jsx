import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../api/api';

const AddMovie = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    title: "",
    description: "",
    genre: "",
    rating: "",
    language: "",
    image: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(input.title.trim() === ""){
      toast.error("Please Enter Title..");
      return;
    }
    if(input.description.trim() === ""){
      toast.error("Please Enter Description...");
      return;
    }
    if(input.genre === ""){
      toast.error("Please select Genre...");
      return;
    }
    if(input.rating.trim() === ""){
      toast.error("Please Give Rating...");
      return;
    }
    if(input.language.trim() === ""){
      toast.error("Please Enter language...");
      return;
    }
    if(input.image.trim() === ""){
      toast.error("Please Enter Image URL...");
      return;
    }
    

    try {
      await axios.post(`${BASE_API_URL}/movies`, {...input, rating: Number(input.rating)})
      toast.success("Movie added successfully...");
      setInput({
        title: "",
        description: "",
        genre: "",
        rating: "",
        language: "",
        image: "",
      });
      navigate('/movies');
    } catch (error) {
      console.log(error);
      toast.error("Failed to add movie...");
    }
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-slate-900/80" />

      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center">
            ➕ Add New Movie
          </h2>
          <p className="text-slate-300 text-center mt-2">
            Enter movie details below
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Movie Title"
              onChange={handleChange}
              value={input.title}
              className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white"
            />

            <textarea
              name="description"
              id="description"
              placeholder="Movie Description"
              rows="3"
              onChange={handleChange}
              value={input.description}
              className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white"
            />

            <div className="flex flex-col md:flex-row gap-4">
              <select
                name="genre"
                id="genre"
                value={input.genre}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled>
                  Select Genre
                </option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Thriller">Thriller</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Animation">Animation</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Superhero">Superhero</option>
              </select>

              <input
                type="text"
                name="language"
                id="language"
                placeholder="Language (e.g. English)"
                onChange={handleChange}
                value={input.language}
                className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="number"
                step="0.1"
                name="rating"
                id="rating"
                placeholder="Rating (0–10)"
                onChange={handleChange}
                value={input.rating}
                className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white"
              />

              <input
                type="text"
                name="image"
                id="image"
                placeholder="Image Path (e.g. /images/movie.jpg)"
                onChange={handleChange}
                value={input.image}
                className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-md text-white"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Add Movie
              </button>

              <button
                type="button"
                onClick={() => navigate("/movies")}
                className="w-full py-3 border border-slate-600 text-slate-300 rounded-md hover:bg-slate-700 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddMovie