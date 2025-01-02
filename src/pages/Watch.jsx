import { Link, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useContext, useState } from "react";
import MovieContext from "../Context/MovieContext";
import { BiArrowBack } from "react-icons/bi";
import { FaCloud, FaCloudDownloadAlt, FaHeart, FaPlay } from "react-icons/fa";

const Watch = () => {
  const { name } = useParams();
  const { Movies } = useContext(MovieContext);
  const movie = Movies.find((movie) => movie.name === name);
  const [play, setPlay] = useState(false);

  console.log(movie.image);

  return (
    <Layout>
      <div className="container  bg-dry md:min-h-screen p-6 mb-12">
        <div className="flexBtn w-full justify-between flex-wrap mb-6 gap-2 bg-main text-white p-6 rounded border border-gray-800">
          <Link
            to={`/stream/movie/${movie.id}`}
            className="btn md:text-xl w-[20%] text-sm flex gap-3 items-center font-bold text-dryGray"
          >
            <BiArrowBack /> {movie.name}
          </Link>
          <div className="flexBtn sm:w-auto w-[70%] gap-5">
            <button className="btn bg-primary2 rounded px-4 py-3 text-sm hover:text-subMain transi font-bold">
              <FaHeart />
            </button>
            <button className="btn bg-subMain  flexRow gap-2  rounded px-8 font-medium py-3 text-sm hover:text-main transi">
              <FaCloudDownloadAlt />
            </button>
          </div>
        </div>
        {/* Watch video */}
        {play ? (
          <video
            controls 
            autoPlay
            className="w-fullh-[200px] md:h-screen rounded object-cover "
          >
            <source
              src={`../Moviess/${movie.video}.mp4`}
              type="video/mp4"
              title={movie.name}
            />
          </video>
        ) : (
          <div className="flex justify-center items-center w-full ">
            <div className="h-[200px] md:h-[400px] rounded overflow-hidden text-white relative w-full bg-center bg-cover">
              <div className=" bg-main2 w-full h-full flexCol absolute top-0 left-0">
                <button
                  onClick={() => setPlay(true)}
                  className="bg-white text-subMain flexCol border border-subMain rounded-full w-16 h-16 transi"
                >
                  <FaPlay />
                </button>
              </div>

              <img
                src={`../images/${movie.image}.jpg`}
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
