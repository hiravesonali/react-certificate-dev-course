const genres = [
  'Drama',
  'Crime',
  'Action',
  'Comedy',
  'Thriller',
  'Horror',
  'Sci-Fi',
  'Fantasy',
  'Romance',
];

export default function MovieForm({ movie, onSave, onCancel }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const movieData = {
      name: formData.get('name'),
      description: formData.get('description'),
      image: formData.get('image'),
      genres: formData.getAll('genres'),
      inTheaters: formData.has('inTheaters'),
    };

    onSave(movieData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Movie Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            defaultValue={movie?.name || ''}
            placeholder="Enter movie name"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Movie Description
          </label>

          <input
            id="description"
            type="text"
            name="description"
            defaultValue={movie?.description || ''}
            placeholder="Enter movie description"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>

          <input
            id="image"
            type="url"
            name="image"
            defaultValue={movie?.image || ''}
            placeholder="https://example.com/movie.jpg"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label
            htmlFor="genres"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Genres
          </label>

          <select
            name="genres"
            multiple
            defaultValue={movie?.genres || []}
            className="w-full rounded-lg border border-gray-300 px-2 py-1"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="inTheaters"
              defaultChecked={movie?.inTheaters || false}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />

            <span className="text-sm font-medium text-gray-700">
              Now Playing
            </span>
          </label>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
