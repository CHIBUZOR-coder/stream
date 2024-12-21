import { Link } from "react-router-dom";
import Filters from "../Components/MoviesPage/Filter";
import { Movies } from "../Data/MovieData";
import Layout from "../Layout/Layout";
import { FaHeart } from "react-icons/fa";

const MoviesPage = () => {
  return (
    <Layout>
      <div className="px-2 my-6">
        <Filters Movies={Movies} />
        <p className="text-lg font-medium my-6">
          Total items found 
          <span className="font-bold text-subMain"> {Movies.length}</span>
        </p>

        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 gap-6">
          {Movies.map((movie, index) => (
            <Link
              to={`/movies/${movie.name}`}
              key={`${movie.id}`}
              className="border h-64 border-border rounded bg-center bg-cover transi hover:scale-95 w-full relative"
              style={{
                backgroundImage: `url('./images/${movie.image}.jpg')`,
              }}
            >
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
    </Layout>
  );
};

export default MoviesPage;
