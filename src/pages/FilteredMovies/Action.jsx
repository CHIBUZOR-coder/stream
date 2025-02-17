import { BsCollection, BsCollectionFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useContext, useMemo, useState } from "react";

import MovieContext from "../../Context/MovieContext";
import Layout from "../../Layout/Layout";


const Action = () => {
  const { AddToCart, FetchedMovies } = useContext(MovieContext);



  const [page, setPage] = useState(1);
  const itemsPerPage = 10;


  // Paginated movies for the current page
 const selected =
   FetchedMovies &&
   FetchedMovies.filter((item) => item.category.tittle === "Action");
 const totalPages = selected && Math.ceil(selected.length / itemsPerPage);

 // Paginated movies for the current page
  const paginatedMovies = useMemo(() => {
    return (selected || [])
      .slice((page - 1) * itemsPerPage, page * itemsPerPage)
      .filter((item) => item.category.tittle === "Action");
  }, [FetchedMovies, page]);

  // console.log("selected", selected);

  return (
    <Layout>
      <div>
        <div className="flex w-full sm:gap-5 gap-4 items-center my-14">
          <BsCollectionFill className="sm-h-6  sm-w-6 h-4 w-4  text-subMain" />
          <h2 className="sm-text-xl text-lg font-bold">Action Movies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4  w-full gap-8">
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
        </div>

        <div className="flex justify-center gap-2 my-10">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded ${
              page === 1 ? "bg-gray-400 text-white" : "bg-subMain text-white"
            }`}
          >
            Previous
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
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
    </Layout>
  );
};

export default Action;
