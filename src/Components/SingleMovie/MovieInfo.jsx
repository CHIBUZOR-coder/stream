import { FaDownload, FaPlay, FaShareAlt } from "react-icons/fa";
import FlexMovie from "../Home/FlexMovie";
import { Link } from "react-router-dom";

const MovieInfo = ({ movie }) => {
  // const gap = "gap-2";
  return (
    <div
      loading="lazy"
      className="bg-center w-full xl:h-screen  bg-cover relative overflow-hidden rounded"
      style={{
        backgroundImage: `url('../images/${movie.image}.jpg')`,
      }}
    >
      <div className="bg-main3 h-full w-full flexCol">
        <div className=" mx-auto px-3 xl:px-20 xl:grid grid-cols-3  flexCol gap-14  py-10 lg:py-20 xl:gap-6 ">
          <div className="flex justify-center items-center w-full">
            <div
              style={{
                backgroundImage: `url('../images/${movie.image}.jpg')`,
              }}
              className="xl:col-span-1 w-[80%] xl:order-none order-last h-head bg-dry border border-gray-800 rounded-lg bg-cover bg-center"
            ></div>
          </div>

          <div className="col-span-2  flex flex-col gap-8   md:grid grid-cols-5 md:gap-4  items-center">
            <div className="col-span-3 flex flex-col gap-4">
              {/* movie tittle */}
              <p className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                {movie.name}
              </p>
              {/* info */}
              <div className="flex justify-start items-center gap-2  font-medium ">
                <div className="flexCol bg-subMain text-white text-xs p-1">
                  HD 4K
                </div>
                <FlexMovie movie={movie && movie} />
              </div>
              {/* description */}
              <p className="text-white text-sm">{movie.description}</p>
              {/* share */}
              <div className="grid sm:grid-cols-5 grid-col-2 gap-4 p-5 bg-main border border-gray-800 rounded-lg">
                <button className="flexCol h-10 w-10 border-r border-border gap-2">
                  <FaShareAlt className="text-white" />
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
                    to={`/stream/watch/${movie.name}`}
                    className="bg-dry hover:text-main transi hover:bg-subMain   transi border-2 border-subMain text-white px-8 py-3  font-medium names rounded-full flexRow gap-4 w-full sm:py-3 "
                  >
                    <FaPlay className="w-3 h-3" /> watch
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-2  w-full   flex justify-end ">
              <button className="md:w-1/3 lg:w1/4 w-full relative flexCol bg-subMain md:mr-[5rem] mr-0 lg:mr-0 hover:bg-transparent border-2 border-subMain transi md:h-64 h-16 rounded font-medium">
                <div className="flexRow gap-6 text-md  uppercase tracking-widest absolute md:rotate-90">
                  Download <FaDownload className="h-6 w-6  md:-rotate-90" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
