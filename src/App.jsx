import { ALL_MOVIES } from './data/movies';

/*
 This is an Icon that you can use to represent the stars if you like.
 Otherwise, you could use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/react/24/solid";

export default function App() {
  const movies = ALL_MOVIES.items;

  return (
    <div className="app">
      <h1 className="text-4xl text-gray-800">Movies list!</h1>
      <div className="flex max-w-7xl text-gray-800 mx-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg mx-5"
          >
            <div className="relative">
              <div className="absolute top-3 right-3 rounded-md bg-black/60 px-2 py-1 text-yellow-400 text-xl">
                {movie.rating ? (
                  <div className="text-yellow-500">
                    {'★'.repeat(movie.rating)}
                    {'☆'.repeat(5 - movie.rating)}
                  </div>
                ) : (
                  <div className="text-gray-400">- ☆☆☆☆☆</div>
                )}
              </div>
              {movie.image ? (
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="h-72 w-full object-cover"
                />
              ) : (
                <div className="flex h-72 w-full items-center justify-center bg-gray-200 text-gray-500">
                  No image
                </div>
              )}
            </div>
            <div className="p-6">
              <h2 className="mb-3 text-xl font-semibold">{movie.name}</h2>

              {movie.inTheaters && (
                <p className="inline-block px-3 py-2 rounded text-sm font-medium bg-green-200">
                  Now Playing
                </p>
              )}

              <p className="my-2 text-blue-800">{movie.genres.join(', ')}</p>

              <p className="text-gray-600 leading-relaxed line-clamp-3">
                {movie.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
