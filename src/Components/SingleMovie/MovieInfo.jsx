import { FaDownload, FaPlay, FaShareAlt } from "react-icons/fa";
import FlexMovie from "../Home/FlexMovie";
import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { Helmet } from "react-helmet";
const MovieInfo = ({ movie }) => {
  // console.log("movie",movie);
  const url = `${window.location.protocol}//${window.location.host}/stream/movie/${movie.id}`;
  const [shareOpen, setShareOpen] = useState(false);

  const HandleToggleShare = () => {
    setShareOpen((prev) => !prev);
  };

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

  // const gap = "gap-2";
  return (
    <>
      <Helmet>
        <title>{movie.name}</title>
        <meta name="description" content={movie.description} />

        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content={movie.name} />
        <meta property="og:description" content={movie.description} />
        <meta
          property="og:image"
          content={`${window.location.origin}/images/${movie.image}.jpg`}
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="video.movie" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={movie.name} />
        <meta name="twitter:description" content={movie.description} />
        <meta
          name="twitter:image"
          content={`${window.location.origin}/images/${movie.image}.jpg`}
        />

        {/* Additional Social Media Notes */}
        {/* Instagram and WhatsApp rely on Open Graph tags. */}
      </Helmet>

      <div
        loading="lazy"
        className="bg-center w-full xl:h-screen  bg-cover  overflow-hidden rounded relative"
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

                {/* **********share********** */}

                <div
                  className={` ${
                    shareOpen ? "" : "hidden"
                  }  absolute  top-0 left-[0] w-full h-full bg-main2 flex justify-center items-center `}
                >
                  {/* *****cancel********* */}
                  <span
                    onClick={() => setShareOpen((prev) => !prev)}
                    className="rounded-full absolute top-[20%] md:top-[12%] md:right-[30%] right-[8%] border-2 h-14 w-14 border-subMain hover:text-subMain text-white transi hover:border-white hover:rotate-180 flex justify-center items-center"
                  >
                    <MdCancel className="h-12 w-12" />
                  </span>
                  {/* ********* */}
                  <div className="  py-10 -mt-10 md:-mt-28 z-40  px-4 bg-main rounded-md grid md:grid-cols-5 grid-cols-3 justify-center gap-5 border border-border ">
                    {socials.map((social, i) => (
                      <a
                        key={i}
                        href={social.path}
                        className="bg-border p-2 rounded-md transi flex justify-center items-center hover:bg-white hover:text-border"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-5 grid-col-2 gap-4 p-5 bg-main border border-gray-800 rounded-lg relative">
                  <button className="flexCol p-1 border-r border-border gap-2 ">
                    <span
                      onClick={HandleToggleShare}
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
    </>
  );
};

export default MovieInfo;
