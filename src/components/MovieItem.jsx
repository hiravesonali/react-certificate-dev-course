import MovieContent from './MovieContent';
import MovieImage from './MovieImage';
import MovieRatings from './MovieRatings';

export default function MovieItem({ movies }) {
  return (
    <>
      <h1 className="text-4xl text-gray-800">Movies list!</h1>
      <div className="flex max-w-7xl text-gray-800 mx-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg mx-5"
          >
            <div className="relative">
              <MovieRatings rating={movie.rating} />
              <MovieImage image={movie.image} />
            </div>
            <MovieContent
              name={movie.name}
              inTheaters={movie.inTheaters}
              genres={movie.genres}
              description={movie.description}
            />
          </div>
        ))}
      </div>
    </>
  );
}
