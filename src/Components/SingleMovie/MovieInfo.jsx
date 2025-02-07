import { FaDownload, FaPlay, FaShareAlt } from "react-icons/fa";
import FlexMovie from "../Home/FlexMovie";
import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useContext, useState } from "react";
import { MdCancel } from "react-icons/md";
import { Helmet } from "react-helmet";
import MovieContext from "../../Context/MovieContext";
const MovieInfo = ({ movie, setShareOpen, url }) => {
  // console.log("movie",movie);
  const { User } = useContext(MovieContext);
console.log("Duser:", User);

  const HandleUserCheck = (e) => {
    e.preventDefault();
    if (!User || User.role) {
      setShareOpen((prev) => !prev);
    }
  };

  // const gap = "gap-2";
  return (
    <>
      <Helmet>
        <title>{movie.name}</title>
        <meta name="description" content={movie.description} />
        <meta property="og:title" content={movie.name} />
        <meta property="og:description" content={movie.description} />
        <meta
          property="og:image"
          content={`url('../images/${movie.image}.jpg`}
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="video.movie" />
      </Helmet>

      <div
        loading="lazy"
        className="bg-center w-full md:min-h-screen  bg-cover  overflow-hidden rounded "
        style={{
          backgroundImage: `url('../images/${movie.image}.jpg')`,
        }}
      >
        <div className="bg-main3  w-full flexCol ">
          {/* movie tittle */}
          <p className="xl:text-4xl text-white capitalize font-sans mt-8 text-2xl font-bold italic md:text-center">
            {movie.name}
          </p>

          <div className="w-full mx-auto px-3  xl:px-8 lg:grid grid-cols-3   flexCol gap-14  py-6 lg:py-10 xl:gap-6 ">
            {/* child */}
            <div className="xl:col-span-1 flex justify-center lg:justify-start items-start w-full  h-full">
              <div
                style={{
                  backgroundImage: `url('../images/${movie.image}.jpg')`,
                }}
                className=" w-[80%] h-head bg-dry border border-dry rounded-lg bg-cover bg-center"
              ></div>
            </div>
            {/* ****** */}

            {/* child */}
            <div className="col-span-2  py-2  lg:grid grid-cols-5  flex flex-col gap-8   justify-center  items-center ">
              {/* child */}
              <div className="col-span-4 md:col-span-5 lg:col-span-4 flex flex-col gap-4 md:gap-8 justify-center items-center   ">
                <div className="w-full rounded border-[3px] border-main h-[250px]  ">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${movie.trailer}`}
                    title={movie.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* info */}
                <div className="flex justify-start items-center gap-2  font-medium ">
                  <div className="flexCol bg-subMain text-white text-xs p-1">
                    HD 4K
                  </div>
                  <FlexMovie movie={movie && movie} />
                </div>
                {/* description */}
                <div className="px-4">
                  <p className="text-white text-sm">{movie.description}</p>
                </div>

                {/* **********share********** */}

                <div className="grid sm:grid-cols-5 grid-col-2 gap-4 p-5 bg-main border border-gray-800 rounded-lg relative">
                  <button className="flexCol p-1 border-r border-border gap-2 ">
                    <span
                      onClick={() => setShareOpen((prev) => !prev)}
                      className="p-2 bg-border rounded-md"
                    >
                      <FaShareAlt className="text-white" />
                    </span>
                  </button>

                  {/* Language */}
                  <div className="col-span-2 flexCol font-medium text-sm">
                    <p>
                      Languge: {""}{" "}
                      <span className="ml2 truncate">{movie.language}</span>
                    </p>
                  </div>

                  <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                    <Link
                      onClick={(e) => HandleUserCheck(e)}
                      to={`${
                        User && User.role ? `/stream/watch/${movie.name}` : ""
                      }`}
                      className="bg-dry hover:text-main transi hover:bg-subMain   transi border-2 border-subMain text-white px-8 py-3  font-medium names rounded-full flexRow gap-4 w-full sm:py-3 "
                    >
                      <FaPlay className="w-3 h-3" /> watch
                    </Link>
                  </div>
                </div>
              </div>

              {/* child */}
              <div className="  w-full  flex justify-end grid-cols-1  ">
                <button className=" lg:w-1/2 w-full relative flexCol bg-subMain   hover:bg-transparent border-2 border-subMain transi lg:h-64 h-16 rounded font-medium">
                  <div className="flexRow gap-6 text-md  uppercase tracking-widest absolute lg:rotate-90">
                    Download <FaDownload className="h-6 w-6  lg:-rotate-90" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
