import MovieContent from './MovieContent';
import MovieImage from './MovieImage';
import MovieRatings from './MovieRatings';

export default function MovieItem({ movie }) {
  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg mx-5">
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
    </>
  );
}
