export default function MovieContent({
  name,
  inTheaters,
  genres,
  description,
}) {
  return (
    <div className="p-6">
      <h2 className="mb-3 text-xl font-semibold">{name}</h2>

      {inTheaters && (
        <p className="inline-block px-3 py-2 rounded text-sm font-medium bg-green-200">
          Now Playing
        </p>
      )}

      <p className="my-2 text-blue-800">{genres.join(', ')}</p>

      <p className="text-gray-600 leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>
  );
}
