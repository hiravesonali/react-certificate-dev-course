/*
 This is an Icon that you can use to represent the stars if you like.
 Otherwise, you could use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/react/24/solid";

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

// with starIcon implementation
{
  /* <div className="flex items-center gap-1">
  {rating == null && <span className="text-white">-</span>}

  {Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      className={`h-5 w-5 ${
        rating != null && index < rating ? 'text-yellow-400' : 'text-gray-400'
      }`}
    />
  ))}
</div>; */
}
