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
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { GoEye } from "react-icons/go";

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
    const Head =
      "text-xs text-left text-main font-semibold px-6 py-2 uppercase ";
    const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

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
                {/* <th scope="col" className={`${Head}`}>
              Language
            </th> */}
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
                        src={`./images/${movie.image}.jpg`}
                        alt={movie.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </td>
                  <td className={`${Text}`}>
                    <p>{movie.name}</p>
                  </td>
                  <td className={`${Text}`}>
                    <p>{movie.category}</p>
                  </td>
                  <td className={`${Text}`}>
                    <p>{movie.year}</p>
                  </td>
                  <td className={`${Text}`}>
                    <p>{movie.hours}</p>
                  </td>
                  <td className={`${Text} float-right flexRow gap-2`}>
                    <Link
                      to={`/stream/watch/${movie.name}`}
                      className="bg-subMain text-white rounded flexCol py-2 px-4  "
                    >
                      <GoEye className="w-6 h-6" />
                    </Link>
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
