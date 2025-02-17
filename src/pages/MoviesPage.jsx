import { Link } from "react-router-dom";
import Filters from "../Components/MoviesPage/Filter";
import Layout from "../Layout/Layout";
import { FaHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
// import { MovieContext } from "../Context/MovieContext";
import MovieContext from "../Context/MovieContext";
import { CgSpinner } from "react-icons/cg";

const MoviesPage = () => {
  const { userChoice, FetchedMovies, AddToCart } = useContext(MovieContext);
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    if (FetchedMovies) {
      const actualMovies = FetchedMovies;
      setMovies(actualMovies);
    }
  }, [FetchedMovies]);

  useEffect(() => {
    console.log("mov:", Movies);
  }, [Movies]);

  const maxDisplay = 10;
  const maxPage = 39;
  const [page, SetPage] = useState(0);

  const filterMovies = () => {
    if (!userChoice || Object.keys(userChoice).length === 0) {
      return Movies; // If no filters are selected, return all movies.
    }

    return Movies.filter((movie) => {
      let matches = true;

      // Check userChoice against each filter
      for (const [key, value] of Object.entries(userChoice)) {
        if (key === "1" && movie.category.tittle !== value) {
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
  const HandelLoadQuantity = (val) => {
    if (val === "next") {
      if (page + maxDisplay < filteredMovies.length) {
        SetPage(page + maxDisplay);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (val === "prev") {
      if (page - maxDisplay >= 0) {
        SetPage(page - maxDisplay);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      console.log("error");
    }
  };

  // useEffect(() => {
  //   console.log("page", page);
  // }, [page]);

  // useEffect(() => {
  //   console.log("filtered", filteredMovies.length);
  // }, [filterMovies]);

  // useEffect(() => {
  //   console.log("max", maxDisplay);
  // }, [maxDisplay]);

  return (
    <Layout>
      <div className="px-2 my-6">
        <Filters Movies={Movies} />
        <p className="text-lg font-medium flex items-center gap-2 my-6">
          Total items found
          <span className="font-bold text-subMain rounded-lg">
            {" "}
            {filteredMovies.length}
          </span>
        </p>

        <div
          id="#top"
          className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 gap-6"
        >
          {filteredMovies.slice(page, page + maxDisplay).map((movie, index) => (
            <div
              className="border-2 border-border rounded bg-center bg-cover relative transi hover:scale-95 w-full flex flex-col "
              key={`${movie.id}`}
            >
              <Link
                to={`/movie/${movie.id}`}
                className=" h-64  bg-center bg-cover "
              >
                <img
                  src={`${movie.image}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </Link>

              <div className="flex absolute bottom-0  justify-between items-center  bg-trans2 w-full text-white px-4 py-3">
                <h3 className="font-semibold truncate">{movie.name}</h3>
                <button
                  onClick={() => AddToCart(movie, movie.id)}
                  className="h-8 w-8 text-sm flexCol transi hover:bg-transparent border-subMain bg-subMain2 border-2 rounded-md text-white "
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className=" my-10 md:my-16 flex justify-center gap-5 items-center w-full">
          <span
            onClick={(e) => HandelLoadQuantity("prev")}
            className={` ${
              page > 0 ? "bg-subMain" : ""
            } border-2 flex justify-center items-center gap-2 rounded-md cursor-pointer border-subMain py-3 px-8`}
          >
            prev
          </span>

          <span
            onClick={(e) => HandelLoadQuantity("next")}
            className={` ${
              page < maxPage ? "bg-subMain" : ""
            } border-2 flex justify-center items-center gap-2 rounded-md cursor-pointer border-subMain py-3 px-8`}
          >
            next
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default MoviesPage;
