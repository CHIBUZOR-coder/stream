import { useContext, useState } from "react";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import MovieContext from "../Context/MovieContext";

const Table = ({
  data,
  User,
  For,
  Handlegeneral,
  setdeletedMovieId,
  HandleDeleteMovie,
}) => {
  const { IdRetrival } = useContext(MovieContext);

  // console.log(User.role);

  if (For === "movie") {
    if (!data || data.length === 0) {
      return (
        <div className="text-center text-white py-4">
          <p>No movies available to display.</p>
        </div>
      );
    }
  }

  const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase ";
  const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
  return (
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
          {data.map((movie, i) => (
            <tr key={i}>
              <td className={`${Text}`}>
                <div className="w-12 bg-dry borer border-border rounded h-12 overflow-hidden ">
                  <img
                    src={`${movie.image}`}
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
              {/* <td className={`${Text}`}>
                <p>{movie.language}</p>
              </td> */}
              <td className={`${Text}`}>
                <p>{movie.year}</p>
              </td>
              <td className={`${Text}`}>
                <p>{movie.hours}</p>
              </td>
              <td className={`${Text} float-right flexRow gap-2`}>
                {User.role === "Admin" ? (
                  <>
                    <button
                      onClick={() => Handlegeneral(movie.name, movie.id)}
                      className="bg-dry border border-border flexRow gap-2 text-border transi edit  hover:bg-green-500 hover:text-white px-2 py-1 rounded"
                    >
                      Edit{" "}
                      <FaEdit className="text-green-500 editchild  transi " />
                    </button>
                    <button
                      onClick={(e) => {
                        HandleDeleteMovie(e, movie.id);
                      }}
                      className="bg-subMain text-white rounded flexCol w-6 h-6  hover:bg-main transi border border-subMain delete  "
                    >
                      <MdDelete className="deletechild transi" />
                    </button>
                  </>
                ) : (
                  <>
                    <button className="bg-dry border border-border flexRow gap-2 text-border px-2 py-1 rounded">
                      Download <FaCloudDownloadAlt />
                    </button>
                    <Link
                      to={`/stream/watch/${movie.name}`}
                      className="bg-subMain text-white rounded flexCol w-6 h-6 "
                    >
                      <GoEye />
                    </Link>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
