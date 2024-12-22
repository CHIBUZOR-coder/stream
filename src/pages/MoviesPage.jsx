import { Link } from "react-router-dom";
import Filters from "../Components/MoviesPage/Filter";
import Layout from "../Layout/Layout";
import { FaHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import { CgSpinner } from "react-icons/cg";

const MoviesPage = () => {
  const { userChoice, Movies } = useContext(MovieContext);
  const maxPage = 10;
  const [page, SetPage] = useState(maxPage);
  const [load, setLoad] = useState(false);
  const HandelLoadMore = () => {
    setLoad(true); // Show the spinner
    SetPage(page + maxPage);
  };

  const filterMovies = () => {
    if (!userChoice || Object.keys(userChoice).length === 0) {
      return Movies; // If no filters are selected, return all movies.
    }

    return Movies.filter((movie) => {
      let matches = true;

      // Check userChoice against each filter
      for (const [key, value] of Object.entries(userChoice)) {
        if (key === "1" && movie.category !== value) {
          matches = false; // Check category filter
        } else if (key === "2" && movie.approxiY !== value) {
          matches = false; // Check year filter (using approxiY)
        } else if (key === "3" && movie.approxiT !== value) {
          matches = false; // Check time filter (using approxiT)
        } else if (key === "4" && movie.approxiR !== value) {
          matches = false; // Check rate filter
        }
      }

      return matches;
    });
  };

  const filteredMovies = filterMovies();

  return (
    <Layout>
      <div className="px-2 my-6">
        <Filters Movies={Movies} />
        <p className="text-lg font-medium my-6">
          Total items found
          <span className="font-bold text-subMain rounded-lg">
            {" "}
            {filteredMovies.length}
          </span>
        </p>

        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 gap-6">
          {filteredMovies.slice(0, page).map((movie, index) => (
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

        <div className=" my-10 md:my-16 flex justify-center items-center w-full">
          <span
            onClick={HandelLoadMore}
            className=" border-2 flex justify-center items-center gap-2 rounded-md cursor-pointer border-subMain py-3 px-8"
          >
            LoadMore
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default MoviesPage;
