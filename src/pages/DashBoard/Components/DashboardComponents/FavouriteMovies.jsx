import { useContext, useEffect, useMemo, useState } from "react";
import MovieContext from "../../../../Context/MovieContext";
import Table from "../../../../Custom/Table";
import { useParams } from "react-router-dom";

const Favourite = ({ Handlegeneral }) => {
  const { Movies } = useContext(MovieContext);
    const { id } = useParams();

  const [FavouriteCartMovies, setFavouriteCartMovies] = useState([]);

  console.log("fmovies", FavouriteCartMovies);

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Paginated movies for the current page
  const paginatedMovies = useMemo(() => {
    return (FavouriteCartMovies || []).slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
  }, [FavouriteCartMovies, page]);
  // const selected = Movies.slice(0, 10);
  const totalPages = Math.ceil(Movies.length / itemsPerPage);
  const userData = JSON.parse(localStorage.getItem("UserInfo")) || null;
  console.log("uses", userData);

  const GetFavouriteCart = async () => {
    try {
      const res = await fetch(
        `https://streambackend-nbbc.onrender.com/getfacouriteCart/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.log("Error fetching cart:", data);
        return;
      }

      console.log("cartData:", data.data.favouriteCartMovies);
     
      setFavouriteCartMovies(data.data.favouriteCartMovies); // Correct way to set state
    } catch (error) {
      console.log("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    GetFavouriteCart();
  }, []); // Ensures it runs only once on mount

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center p-0 md:p-4 ">
        <h2 className="md:text-xl text-lg text-white  font-bold">
          Favourite Movies
        </h2>
        <button className="bg-dry font-medium transi hover:bg-subMain  gap-4 text-white border border-subMain py-3 px-6 rounded ">
          Delete All
        </button>
      </div>

      <Table
        data={paginatedMovies ? paginatedMovies : []}
        User={userData}
        For={"Fav"}
        Handlegeneral={Handlegeneral}
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
  );
};

export default Favourite;
