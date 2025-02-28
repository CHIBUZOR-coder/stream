import { useContext, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link, Links, useParams } from "react-router-dom";
import MovieContext from "../Context/MovieContext";
import MovieInfo from "../Components/SingleMovie/MovieInfo";
import MovieCasts from "../Components/SingleMovie/MovieCasts";
import MovieRates from "../Components/SingleMovie/MovieRates";
import { BsCollectionFill } from "react-icons/bs";
import { FaRegFaceSadTear } from "react-icons/fa6";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  // console.log("id:", id);
  const User = JSON.parse(localStorage.getItem("userInfo"));
  const { Casts, FetchedMovies, HandleSubscribe, setResult, setOrderId } =
    useContext(MovieContext);
  const [shareOpen, setShareOpen] = useState(false);
  const [SubOpen, setSubOpen] = useState(false);
  const [movie, setMovie] = useState([]);
  const [Relatedmovie, setRelatedMovie] = useState([]);
  const [reload, setReload] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (FetchedMovies) {
  //     const moviee = FetchedMovies.find((movie) => movie.id === parseInt(id));

  //     // console.log("moviee:", FetchedMovies);

  //     setMovie(moviee);
  //     const relatedMovies = FetchedMovies && FetchedMovies.filter(
  //       (movi) => movi?.category.tittle === moviee.category
  //     );
  //     setRelatedMovie(relatedMovies);
  //   }
  // }, [FetchedMovies]);

  useEffect(() => {
    if (FetchedMovies) {
      const moviee = FetchedMovies.find((movie) => movie.id === parseInt(id));

      // console.log("Selected Movie:", moviee);

      if (moviee) {
        setMovie(moviee);
        if (FetchedMovies) {
          const relatedMovies = FetchedMovies.filter(
            (movi) => movi?.category?.tittle === moviee?.category?.tittle
          );
          setRelatedMovie(relatedMovies);
        }
      }
    }
  }, [FetchedMovies, id]);

  let url;
  useEffect(() => {
    // console.log("movieee:", movie);
    if (movie) {
    }
    url = `${window.location.protocol}//${window.location.host}/movie/${
      movie && movie?.id
    }`;
    // console.log("rela:", Relatedmovie);
  }, [movie, Relatedmovie]);

  const socials = [
    {
      path: `https://wa.me/?text=${encodeURIComponent(url)}`,
      icon: <FaWhatsapp className="h-7 w-7" />,
    },
    {
      path: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      icon: <FaFacebook className="h-7 w-7" />,
    },
    {
      path: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
      icon: <FaXTwitter className="h-7 w-7" />,
    },
    {
      path: `https://www.instagram.com/?url=${encodeURIComponent(url)}`, // Instagram doesn't have a native share URL for web
      icon: <FaInstagram className="h-7 w-7" />,
    },
    {
      path: `https://www.tiktok.com/share?url=${encodeURIComponent(url)}`, // TikTok might not support direct sharing via URL
      icon: <FaTiktok className="h-7 w-7" />,
    },
  ];

  return (
    <div>
      <Layout>
        {!User || User.subscription !== "SUBSCRIBED" ? (
          <div
            className={` ${
              SubOpen ? "" : "hidden"
            }  absolute  top-0 left-0 z-50   w-full h-full bg-main2 flex justify-center items-center `}
          >
            <span
              onClick={() => setSubOpen((prev) => !prev)}
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
        ) : (
          // <div className=" flex flex-col w-full grid-cols-12 gap-5  bg-dry p-4 border border-x-gray-800  rounded-lg">
          //   <p className="font-semibold text-white">
          //     You have not favourite movie added
          //   </p>
          // </div>
          ""
        )}

        <div
          className={` ${
            shareOpen ? "" : "hidden"
          }  absolute  top-0 left-0 z-50   w-full h-full bg-main2 flex justify-center items-center `}
        >
          <span
            onClick={() => setShareOpen((prev) => !prev)}
            className="rounded-full fixed top-[30%]  md:right-[25%] lg:right-[20%] right-[8%] border-2 h-14 w-14 border-subMain hover:text-subMain text-white transi hover:border-white hover:rotate-180 flex justify-center items-center"
          >
            <MdCancel className="h-12 w-12" />
          </span>

          <div className="  fixed top-[40%]  py-10  px-4 bg-main rounded-md grid md:grid-cols-5 grid-cols-3 justify-center gap-8 md:gap-10 lg:gap-20 border border-border ">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.path}
                className="bg-border  p-2 rounded-md transi flex justify-center items-center hover:bg-white hover:text-border"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <MovieInfo
          movie={movie}
          setShareOpen={setShareOpen}
          setSubOpen={setSubOpen}
          url={url}
        />
        <div className="container mx-auto px-2 my-6 min-h-screen  ">
          <MovieCasts movieId={movie?.id} movie={movie} />

          <MovieRates movie={movie && movie} />

          <div className="my-16">
            <div className="flex items-center gap-8 md:gap-4">
              <BsCollectionFill className="w-6 h-6 md:w-4 md:h-4 text-subMain" />
              <h2 className="sm:text-xl font-bold text-lg">Related Movies</h2>
            </div>

            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 gap-6">
              {Relatedmovie &&
                Relatedmovie.map((movie, index) => (
                  <Link
                    to={`/movie/${movie?.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setReload((prev) => !prev);
                      // navigate(`/movie/${movie?.id}`);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    // to={`/movie/${movie?.id}`}
                    key={`${movie.id}`}
                    className="border h-64 border-border rounded bg-center bg-cover transi hover:scale-95 w-full relative"
                    style={{
                      backgroundImage: `url('${movie.image}')`,
                    }}
                  >
                    <div className="absolute flex  justify-between items-center left-0 bottom-0 bg-main2 w-full text-white px-4 py-3">
                      <h3 className="font-semibold truncate">{movie?.name}</h3>
                      <button className="h-8 w-8 text-sm flexCol transi hover:bg-transparent border-subMain bg-subMain2 border-2 rounded-md text-white ">
                        <FaHeart />
                      </button>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SingleMovie;
