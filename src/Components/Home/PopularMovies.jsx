import { BsCollection, BsCollectionFill } from "react-icons/bs";
import { Movies } from "../../Data/MovieData";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const PopularMovies = () => {
  const selected = Movies.filter((movie) => movie.popular === "true");
  console.log("selected", selected);

  return (
    <div>
      <div className="flex w-full sm:gap-5 gap-4 items-center my-14">
        <BsCollectionFill className="sm-h-6  sm-w-6 h-4 w-4  text-subMain" />
        <h2 className="sm-text-xl text-lg font-bold">Popular Movies</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4  w-full gap-8">
        {selected.map((movie) => (
          <Link
            to={`/stream/movie/${movie.id}`}
            key={`${movie.id}`}
            className="border h-64 border-border rounded bg-center bg-cover transi hover:scale-95 w-full relative"
          >
            <img
              src={`./images/${movie.image}.jpg`}
              loading="lazy"
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute flex  justify-between items-center left-0 bottom-0 bg-main2 w-full text-white px-4 py-3">
              <h3 className="font-semibold truncate">{movie.name}</h3>
              <button className="h-8 w-8 text-sm flexCol transi hover:bg-transparent border-subMain bg-subMain2 border-2 rounded-md text-white ">
                <FaHeart />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
