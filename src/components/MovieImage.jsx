export default function MovieImage({ image }) {
  return (
    <>
      {image ? (
        <img src={image} alt={name} className="h-72 w-full object-cover" />
      ) : (
        <div className="flex h-72 w-full items-center justify-center bg-gray-200 text-gray-500">
          No image
        </div>
      )}
    </>
  );
}
