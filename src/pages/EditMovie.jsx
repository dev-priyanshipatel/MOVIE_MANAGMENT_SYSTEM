import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_API_URL } from "../api/api";

const EditMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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

  const fetchMovie = async () => {
    try {
      const { data } = await axios.get(`${BASE_API_URL}/movies/${id}`);
      setInput(data);
    } catch (error) {
      toast.error("Failed to load movie");
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${BASE_API_URL}/movies/${id}`, {
        ...input,
        rating: Number(input.rating),
      });

      toast.success("Movie updated successfully...");
      navigate("/movies");
    } catch (error) {
      toast.error("Failed to update movie...");
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-slate-900/80" />

      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center">
            Update Movie
          </h2>

          <form className="mt-8 space-y-5" onSubmit={handleUpdate}>
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
                Update Movie
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
};

export default EditMovie;
