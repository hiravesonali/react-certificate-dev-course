export default function Ratings({ rating }) {
  return (
    <>
      <div className="absolute top-3 right-3 rounded-md bg-black/60 px-2 py-1 text-yellow-400 text-xl">
        {rating ? (
          <div className="text-yellow-500">
            {'★'.repeat(rating)}
            {'☆'.repeat(5 - rating)}
          </div>
        ) : (
          <div className="text-gray-400">- ☆☆☆☆☆</div>
        )}
      </div>
    </>
  );
}
