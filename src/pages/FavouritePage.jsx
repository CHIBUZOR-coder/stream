import { useContext, useState, useEffect, useMemo } from "react";
import MovieContext from "../Context/MovieContext";
import Layout from "../Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { GoEye } from "react-icons/go";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const FavouritePage = () => {
  const { name } = useParams();
  const {
    Movies,
    setFavouriteCartMovies,
    FavouriteCartMovies,
    favCartAlert,
    setFavCartAlert,
  } = useContext(MovieContext);
  const GetFavouriteCart = async () => {
    try {
      const res = await fetch(`http://localhost:5000/getfacouriteCart/${name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        console.log("Error fetching cart:", data);
        return;
      }

      console.log("cartData:", data.data.favouriteCartMovies);
      localStorage.setItem(
        "Favourite",
        JSON.stringify(data.data.favouriteCartMovies)
      );
      setFavouriteCartMovies(data.data.favouriteCartMovies); // Correct way to set state
      
    } catch (error) {
      console.log("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    GetFavouriteCart();
  }, []); // Ensures it runs only once on mount

  // Ensures it runs only once on mount

  // useEffect(() => {
  //   console.log("carttt", FavouriteCartMovies);
  // }, [FavouriteCartMovies]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Paginated movies for the current page
  const paginatedMovies = useMemo(() => {
    return (FavouriteCartMovies || []).slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
  }, [FavouriteCartMovies, page]);

  // Total pages for pagination
  const totalPages = Math.ceil(Movies.length / itemsPerPage);
  const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase ";
  const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3 ";

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        {/* Page Header */}
        <div className="flex justify-between items-center p-0 md:p-4">
          <h2 className="md:text-xl text-lg text-white font-bold">
            Favourite Movies
          </h2>
        </div>

        <div className="overflow-x-scroll overflow-hidden relative w-full">
          <table className="table-auto w-full text-white border  border-border divide-y divide-border">
            <thead>
              <tr className="bg-dryGray">
                <th scope="col" className={`${Head}`}>
                  Image
                </th>
                <th scope="col" className={`${Head}`}>
                  Name
                </th>
                <th scope="col" className={`${Head}`}>
                  Category
                </th>

                <th scope="col" className={`${Head}`}>
                  Year
                </th>
                <th scope="col" className={`${Head}`}>
                  Hours
                </th>
                <th scope="col" className={`${Head}`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" bg-main divide-y divide-gray-800">
              {paginatedMovies.map((movie, i) => (
                <tr key={i}>
                  <td className={`${Text}`}>
                    <div className="w-12 bg-dry borer border-border rounded h-12 overflow-hidden ">
                      <img
                        src={`${movie.movie?.image}`}
                        alt={movie.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </td>
                  <td className={`${Text}`}>
                    <p>{movie.movie?.name}</p>
                  </td>
                  <td className={`${Text}`}>
                    <p>{movie.movie?.category.tittle}</p>
                  </td>
                  <td className={`${Text}`}>
                    <p>{movie.movie?.year}</p>
                  </td>
                  <td className={`${Text} `}>
                    <p>{movie.movie?.time}</p>
                  </td>
                  <td className={`${Text}  gap-3 flex items-center `}>
                    <button className="bg-dry border border-border flexRow gap-2 text-border px-2 py-1 rounded">
                      Download <FaCloudDownloadAlt />
                    </button>
                    <Link
                      to={`/stream/watch/${movie.id}`}
                      className="bg-subMain text-white  hover:bg-main transi border border-subMain rounded flexCol w-6 h-6 "
                    >
                      <GoEye />
                    </Link>

                    <button
                      onClick={(e) => {
                        HandleDeleteMovie(e, movie.id);
                      }}
                      className="bg-subMain text-white rounded flexCol w-6 h-6  hover:bg-main transi border border-subMain delete  "
                    >
                      <MdDelete className="deletechild transi" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-2 mb-7 mt-2">
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

export default FavouritePage;
