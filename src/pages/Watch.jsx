import { Link, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useContext, useEffect, useState } from "react";
import MovieContext from "../Context/MovieContext";
import { BiArrowBack } from "react-icons/bi";
import { FaCloud, FaCloudDownloadAlt, FaHeart, FaPlay } from "react-icons/fa";

const Watch = () => {
  const { name } = useParams();
  const User = JSON.parse(localStorage.getItem("userInfo"));
  const { FetchedMovies, isLogin, watched, setWatched, Alert } =
    useContext(MovieContext);

  // const movie = AllMovies.find((movie) => movie.name === name);
  const [play, setPlay] = useState(false);
  const [movie, setMovie] = useState(null);
  const [Result, setResult] = useState(null);

  useEffect(() => {
    // console.log("watch", AllMovies);
    if (FetchedMovies) {
      const currentMovie = FetchedMovies.find((movie) => movie.name === name);
      setMovie(currentMovie); // Set the movie state here
    }
  }, [FetchedMovies]);

  useEffect(() => {
    console.log("moviee:", movie);
  }, [movie]);

  const HandeleAddWtchCount = async (e, movieId) => {
    e.preventDefault();
    const Id = User.id;
    console.log("movieId:", movieId);
    console.log("userid:", Id);

    if (isLogin) {
      try {
        const res = await fetch(
          "https://streambackend-nbbc.onrender.com/addwatchCount",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json", // Correct header
            },

            body: JSON.stringify({ Id, movieId }),
          }
        );
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
        } else {
          setWatched(data.data);
          console.log(data);
        }
      } catch (error) {
        console.log(error.message);
        setResult(Alert(false, error.message));
      } finally {
        setTimeout(() => {
          setResult(null);
        }, 4000);
      }
    }
  };

  return (
    <Layout>
      <div className="container relative  bg-dry md:min-h-screen p-6 mb-12">
        <div
          className={` ${
            Result ? "Animate" : "hidden"
          } fixed Alert  left-0 w-full z-40 flex justify-center items-center `}
        >
          <div className=" bg-text text-dry w-1/2 rounded-md border-[3px] border-subMain flex justify-center items-center p-4">
            {Result && <p>{Result}</p>}
          </div>
        </div>

        <div className="flexBtn w-full justify-center flex-wrap mb-6 gap-2 bg-main text-white p-6 rounded border border-gray-800">
          <div className="w-full flex justify-between p-2 gap-5" >
            <p>
              <BiArrowBack />
            </p>
            <Link
              to={`/movie/${movie?.id}`}
              className="btn md:text-xl w-full text-sm flex gap-3 items-center font-bold text-dryGray"
            >
              {movie && movie?.name}
            </Link>
          </div>
          <div className="flexBtn sm:w-auto w-full gap-5  justify-between p-2">
            <button className="btn bg-primary2 rounded px-4 py-3 text-sm hover:text-subMain transi font-bold">
              <FaHeart />
            </button>
            <button className="btn   flexRow gap-2 bg-subMain text-white  rounded px-8 font-medium py-3 text-sm hover:text-main transi">
              <FaCloudDownloadAlt />
            </button>
          </div>
        </div>
        {/* Watch video */}
        {play ? (
          <video
            controls
            crossOrigin="anonymous"
            autoPlay
            className="w-full h-[200px]  md:h-screen rounded object-cover "
          >
            <source
              src={`${movie?.video}`}
              type="video/mp4"
              title={movie?.name}
            />
            {console.log("movieVid:", movie?.video)}
          </video>
        ) : (
          <div className="flex justify-center items-center w-full ">
            <div className="h-[200px]  md:h-[400px] rounded overflow-hidden text-white relative w-full bg-center bg-cover">
              <div className=" bg-main2 w-full h-full flexCol absolute top-0 left-0">
                <button
                  onClick={(e) => {
                    setPlay(true);
                    if (User && User.subscription === "SUBSCRIBED") {
                      HandeleAddWtchCount(e, movie?.id);
                    }
                  }}
                  className="bg-white text-subMain flexCol border border-subMain rounded-full w-16 h-16 transi"
                >
                  <FaPlay />
                </button>
              </div>

              <img
                src={`${movie?.image}`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Watch;
