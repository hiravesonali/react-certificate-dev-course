import MovieItem from './components/MovieItem';
import Modal from './components/ui/Modal';
import MovieForm from './components/MovieForm';
import { ALL_MOVIES } from './data/movies';
import { useState } from 'react';

export default function App() {
  const movies = ALL_MOVIES.items;
  const [showMovieForm, setShowMovieForm] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  const handleAddMovie = () => {
    setCurrentMovie(null);
    setShowMovieForm(true);
  };
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Modal
        isOpen={showMovieForm}
        title={currentMovie?.id ? 'Edit Movie' : 'Add Movie'}
      >
        <MovieForm />
      </Modal>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
            🎬 Movies
          </h1>

          <button
            onClick={handleAddMovie}
            className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white cursor-pointer transition hover:bg-indigo-700"
          >
            + Add Movie
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
