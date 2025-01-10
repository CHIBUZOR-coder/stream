import { BsCollection, BsCollectionFill } from "react-icons/bs";
import { Movies } from "../../Data/MovieData";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import MovieContext from "../../Context/MovieContext";

const PopularMovies = () => {
  const { AddToCart } = useContext(MovieContext);
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
          <div
            className="border-2 border-border rounded-md bg-center bg-cover transi hover:scale-95 w-full flex flex-col "
            key={`${movie.id}`}
          >
            <Link
              to={`/stream/movie/${movie.id}`}
              className=" h-64  bg-center bg-cover "
            >
              <img
                src={`./images/${movie.image}.jpg`}
                loading="lazy"
                className="w-full h-full object-cover"
                alt=""
              />
            </Link>

            <div className="flex  justify-between items-center  bg-dry w-full text-white px-4 py-3">
              <h3 className="font-semibold truncate">{movie.name}</h3>
              <button
                onClick={() => AddToCart(movie)}
                className="h-8 w-8 text-sm flexCol transi hover:bg-transparent border-subMain bg-subMain2 border-2 rounded-md text-white "
              >
                <FaHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
