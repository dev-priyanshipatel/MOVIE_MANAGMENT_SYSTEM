import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden hover:scale-[1.02] transition">
        <div className="h-64 overflow-hidden bg-slate-700">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-5 space-y-3">
          <h3 className="text-xl font-semibold text-white">{movie.title}</h3>
          <p className="text-slate-300 text-sm line-clamp-3">
            {movie.description}
          </p>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
              🎭 {movie.genre}
            </span>
            <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full">
              🌐 {movie.language}
            </span>
          </div>

          <div className="mt-4 text-yellow-400 font-semibold">
            ⭐ {movie.rating}/10
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard