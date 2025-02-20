import { BsCollection, BsCollectionFill } from "react-icons/bs";
import { Movies } from "../../Data/MovieData";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useContext, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieContext from "../../Context/MovieContext";

const PopularMovies = () => {
  const { AddToCart, FetchedMovies } = useContext(MovieContext);
  const navigate = useNavigate();
  const selected = (FetchedMovies || []).filter(
    (movie) => movie.popular === true
  );

  const listRef = useRef(null);

  const HandelLoadQuantity = (val) => {
    if (val === "next" || val === "prev") {
      if (listRef.current) {
        listRef.current.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log("Element not found");
      }
    } else {
      console.log("Error: Invalid value");
    }
  };

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages =
    FetchedMovies && Math.ceil(FetchedMovies.length / itemsPerPage);

  // Paginated movies for the current page
  const paginatedMovies = useMemo(() => {
    return (FetchedMovies || []).slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
  }, [FetchedMovies, page]);

  // console.log("selected", selected);

  return (
    <div id="top" ref={listRef}>
      <div className="flex w-full sm:gap-5 gap-4 items-center my-14">
        <BsCollectionFill className="sm-h-6  sm-w-6 h-4 w-4  text-subMain" />
        <h2 className="sm-text-xl text-lg font-bold">Popular Movies</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4  w-full gap-8">
        {paginatedMovies && paginatedMovies.length > 0 ? (
          <>
            {" "}
            {paginatedMovies.map((movie) => (
              <div
                className="border-2 relative border-border rounded bg-center bg-cover transi hover:scale-95 w-full flex flex-col "
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
                    onClick={() => {
                      console.log("cartt", movie.id);
                      AddToCart(movie, movie.id);
                    }}
                    className="h-8 w-8 text-sm flexCol transi hover:bg-transparent border-subMain bg-subMain2 border-2 rounded-md text-white "
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="w-full h-72  lg:h-72 xl:h-96 bg-dry shimmer"></div>
        )}
      </div>

      <div className="flex justify-center gap-2 my-10">
        <button
          disabled={page === 1}
          onClick={() => {
            setPage((prev) => prev - 1);
            HandelLoadQuantity("prev");
          }}
          className={`px-4 py-2 rounded ${
            page === 1 ? "bg-gray-400 text-white" : "bg-subMain text-white"
          }`}
        >
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => {
            setPage((prev) => prev + 1);
            HandelLoadQuantity("next");
          }}
          className={`px-4 py-2 rounded ${
            page === totalPages
              ? "bg-gray-400 text-white"
              : "bg-subMain text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PopularMovies;
