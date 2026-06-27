import MovieItem from './components/MovieItem';
import { ALL_MOVIES } from './data/movies';

export default function App() {
  const movies = ALL_MOVIES.items;

  return (
    <div className="app">
      <MovieItem movies={movies} />
    </div>
  );
}
