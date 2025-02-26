import { useContext, useState, useEffect, useMemo } from "react";
import MovieContext from "../Context/MovieContext";
import Layout from "../Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { GoEye } from "react-icons/go";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdCancel, MdDelete } from "react-icons/md";
import { RiLoader2Fill } from "react-icons/ri";

const FavouritePage = () => {
  const { name } = useParams();
  const [Result, setResult] = useState(null);
  const [display, setDisplay] = useState("");
  const [loadDisplay, setLoadDiaplay] = useState("");

  const {
    setFavouriteCartMovies,
    FavouriteCartMovies,
    issLoading,
    setIsLoading,
    Alert,
    favCartAlert,
    setFavCartAlert,
  } = useContext(MovieContext);
  const [shareOpen, setShareOpen] = useState(false);
  const { HandleSubscribe } = useContext(MovieContext);
  const User = JSON.parse(localStorage.getItem("userInfo"));

  const GetFavouriteCart = async (e) => {
    setIsLoading(true);
    setLoadDiaplay("Getting Favourite Movie...");
    try {
      const res = await fetch(
        `https://streambackend-nbbc.onrender.com/getfacouriteCart/${name}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.log("Error fetching cart:", data);
        setIsLoading(false);
        setDisplay(
          <div className="w-full flex flex-col justify-center items-center gap-5  bg-dry p-4 border border-x-gray-800  rounded-lg">
            <p className="  font-semibold text-white">
              You have not added any favourite movie yet.
            </p>
          </div>
        );
        return;
      }
      setIsLoading(false);
      console.log("cartData:", data.data.favouriteCartMovies);
      if (data.data.favouriteCartMovies.length === 0) {
        setDisplay(
          <div className="w-full flex flex-col justify-center items-center gap-5  bg-dry p-4 border border-x-gray-800  rounded-lg">
            <p className="  font-semibold text-white">
              You have not added any favourite movie yet.
            </p>
          </div>
        );
      } else {
        setDisplay(null);
      }
      localStorage.setItem(
        "Favourite",
        JSON.stringify(data.data.favouriteCartMovies)
      );

      setFavouriteCartMovies(data.data.favouriteCartMovies); // Correct way to set state
    } catch (error) {
      console.log("Fetch error:", error.message);
    }
  };

  const HandleRemoveFavouriteMovie = async (e, id) => {
    e.preventDefault();

    console.log("id:", id);

    try {
      const res = await fetch(
        `https://streambackend-nbbc.onrender.com/deletefacouriteCart/${name}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ movieId: id }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        setResult(Alert(false, data.message));
        setTimeout(() => {
          setResult(null);
        }, 4000);
      } else {
        setResult(Alert(true, data.message));
        GetFavouriteCart();
        setTimeout(() => {
          setResult(null);
        }, 4000);
      }
    } catch (error) {
      console.log(error.message);
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

    console.log("pag:", paginatedMovies);
  }, [FavouriteCartMovies, page]);

  console.log("pagg:", paginatedMovies);

  // Total pages for pagination
  const totalPages = Math.ceil(
    (FavouriteCartMovies?.length || 0) / itemsPerPage
  );

  const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase ";
  const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3 ";

  return (
    <Layout>
      <div className="flex flex-col gap-6 relative">
        {/* Page Header */}
        <div className="flex justify-between items-center p-0 md:p-4">
          <h2 className="md:text-xl text-lg text-white font-bold">
            Favourite Movies
          </h2>
        </div>

        <div
          className={` ${
            Result ? "Animate" : "hidden"
          } fixed Alert  left-0 w-full z-40 flex justify-center items-center `}
        >
          <div className=" bg-text text-dry w-1/2 rounded-md border-[3px] border-subMain flex justify-center items-center p-4">
            {Result && <p>{Result}</p>}
          </div>
        </div>

        <div className="overflow-x-scroll overflow-hidden relative w-full">
          <div
            className={` ${
              shareOpen ? "" : "hidden"
            }  absolute  top-0 left-0 z-50   w-full h-full bg-main2 flex justify-center items-center `}
          >
            <span
              onClick={() => setShareOpen((prev) => !prev)}
              className="rounded-full fixed top-[25%]  md:right-[25%] lg:right-[20%] right-[8%] border-2 h-14 w-14 border-subMain hover:text-subMain text-white transi hover:border-white hover:rotate-180 flex justify-center items-center"
            >
              <MdCancel className="h-12 w-12" />
            </span>

            <div className="  fixed top-[40%] flexCol gap-6  py-5 subscribe  px-4 bg-main rounded-md  justify-center  border border-border ">
              <div className="w-1/2 flex justify-center item-center gap-2">
                <h1 className="text-2xl font-bold">🤖Opps!</h1>
              </div>
              <p className="font-semibold text-text subscribe">
                Only a valid and subscribed user can stream live. Signup or
                login. If you already have an account, please subscribe to enjoy
                our services.
              </p>

              <button
                onClick={(e) => HandleSubscribe(e, User && User.email)}
                className="bg-subMain2 text-white rounded-md border-2 border-subMain transi mt-3 hover:bg-main p-2 animate-bounce hover:animate-none "
              >
                {User ? "Subscribe" : "Login"}
              </button>
            </div>
          </div>

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
            <tbody className=" bg-main divide-y divide-gray-800 w-full bg-green-400 ">
              {issLoading ? (
                <tr className="w-full">
                  <td colSpan="6" className="w-full">
                    <div className=" h-24 w-full  rounded-md border-border   text-white  flex flex-col justify-center items-center ">
                      <RiLoader2Fill className="h-10 w-10 animate-spin" />
                      <p className="w-full text-center font-semibold">
                        {loadDisplay}
                      </p>
                      {/* <p className="font-semibold">this will take about two minutes</p> */}
                    </div>
                  </td>
                </tr>
              ) : paginatedMovies && paginatedMovies.length > 0 ? (
                <>
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
                          onClick={(e) => {
                            if (User.subscription !== "SUBSCRIBED") {
                              setShareOpen((prev) => !prev);
                            } else {
                              navigate(`/stream/watch/${movie.movie?.name}`);
                              // console.log("User already Subscribed!");
                            }
                          }}
                          to={`${
                            User && User.subscription === "SUBSCRIBED"
                              ? `/watch/${movie?.movie.name}`
                              : ``
                          }`}
                          className="bg-subMain text-white  hover:bg-main transi border border-subMain rounded flexCol w-6 h-6 "
                        >
                          <GoEye />
                        </Link>

                        <button
                          onClick={(e) => {
                            HandleRemoveFavouriteMovie(e, movie?.movie.id);
                          }}
                          className="bg-subMain text-white rounded flexCol w-6 h-6  hover:bg-main transi border border-subMain delete  "
                        >
                          <MdDelete className="deletechild transi" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <>{display}</>
              )}
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
