// import { useContext, useState } from "react";

// import MovieContext from "../Context/MovieContext";
// import Table from "../Custom/Table";
// import Layout from "../Layout/Layout";

// const FavouritePage = () => {
//   const { Movies, User } = useContext(MovieContext);
// const selected = Movies.slice(0, 10);

 
//   return (
//     <Layout>
//       <div className="flex flex-col gap-6">
//         <div className="flex justify-between items-center p-0 md:p-4 ">
//           <h2 className="md:text-xl text-lg text-white  font-bold">
//             Favourite Movies
//           </h2>
//         </div>

//         <Table data={selected} User={User}  />
//       </div>
//     </Layout>
//   );
// };

// export default FavouritePage;


import { useContext, useState, useEffect, useMemo } from "react";
import MovieContext from "../Context/MovieContext";
import Table from "../Custom/Table";
import Layout from "../Layout/Layout";

const FavouritePage = () => {
  const { Movies, User } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Paginated movies for the current page
  const paginatedMovies = useMemo(() => {
    return Movies.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  }, [Movies, page]);

  // Total pages for pagination
  const totalPages = Math.ceil(Movies.length / itemsPerPage);

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        {/* Page Header */}
        <div className="flex justify-between items-center p-0 md:p-4">
          <h2 className="md:text-xl text-lg text-white font-bold">
            Favourite Movies
          </h2>
        </div>

        {/* Movies Table */}
        <Table data={paginatedMovies} User={User} />

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
