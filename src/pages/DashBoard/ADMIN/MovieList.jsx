import { useContext, useEffect, useMemo, useState } from "react";
import MovieContext from "../../../Context/MovieContext";
import Table from "../../../Custom/Table";

const MovieList = ({
  Handlegeneral,
  HandleDeleteMovie,
  setResult,
  setIsLoading,
  setLoadDiaplay,
}) => {
  const { Movies, User, AllMovies, Alert } = useContext(MovieContext);
  const [dataId, setDataId] = useState(null);
  const [MovieList, setMovieList] = useState(null);
  // let selected;

  useEffect(() => {
    if (AllMovies && AllMovies.length > 0) {
      const selected = AllMovies.slice(0, 10);
      setMovieList(selected); // Update MovieList with a subset of AllMovies
      // console.log("from List", AllMovies); // Debug log
    }
  }, [AllMovies]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
   const totalPages = AllMovies && Math.ceil(AllMovies.length / itemsPerPage);

  // Paginated movies for the current page
  const paginatedMovies = useMemo(() => {
    return (AllMovies || []).slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
  }, [AllMovies, page]);

  const HandelDeleteAll = async () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (userConfirmed) {
      setLoadDiaplay("Deleting Movies...");
      setIsLoading(true);

      try {
        const res = await fetch(
          "https://streambackend-v5u9.onrender.com/api/deletAllMovie",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer your-auth-token",
            },
          }
        );

        let data;
        if (!res.ok) {
          data = await res.json();
          setIsLoading(false);
          setResult(Alert(false, data.message));
        }
        data = res.json();
        setIsLoading(false);
        setResult(Alert(true, "Movies Deleted successfully"));
      } catch (error) {
        console.error(error.message);
        setResult(Alert(false, "Somthing went wrong, please try again later"));
      } finally {
        setTimeout(() => {
          setResult(null);
        }, 6000);
      }
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center p-0 md:p-4 ">
        <h2 className="md:text-xl text-lg text-white  font-bold">
          Movie Lists
        </h2>
        <button
          onClick={() => {
            HandelDeleteAll();
          }}
          className="bg-dry font-medium transi hover:bg-subMain  gap-4 text-white border border-subMain py-3 px-6 rounded "
        >
          Delete All
        </button>
      </div>
      <div className="flex flex-col ">
        <h3 className="font-medium my-4 text-border">All Movies</h3>
        <Table
          data={paginatedMovies}
          User={User}
          For={"movie"}
          dataId={dataId}
          Handlegeneral={Handlegeneral}
          HandleDeleteMovie={HandleDeleteMovie}
        />

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
    </div>
  );
};

export default MovieList;
