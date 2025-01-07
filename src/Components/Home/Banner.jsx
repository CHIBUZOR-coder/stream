import { Autoplay } from "swiper/modules";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegCalendarAlt } from "react-icons/fa";
import { useContext } from "react";
import MovieContext from "../../Context/MovieContext";
import FlexMovie from "./FlexMovie";
// import { Movies } from "../../Data/MovieData";

const Banner = React.memo(() => {
  const { Movies } = useContext(MovieContext);
  // Utility function to shuffle an array
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5); // Fisher-Yates shuffle
  };

  const randomMovies = shuffleArray(Movies);

  return (
    <div className="relative w-full">
      {/* <div
        className={`bg-[url('/image/perfect.jpg')] bg-cover bg-center relative overflow-hidden rounded  p-2`}
      >
        
        lorem20
      </div> */}

      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        lazy={true}
        preloadImages={false}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-72  lg:h-72 xl:h-96 bg-dry"
      >
        {randomMovies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            loading="lazy"
            className="bg-center  bg-cover relative overflow-hidden rounded"
          >
            <img
              src={`./images/${movie.image}.jpg`}
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute w-full h-full linearbg top-0 ">
              <div className="absolute top-[45%] md:top-[20%] left-[5%] flex flex-col gap-2">
                <h1 className="xl:text-4xl truncate names capitalize font-sans sm:text-2xl text-xl font-bold">
                  {movie.name}
                </h1>
                <FlexMovie movie={movie} />

                <div className=" flex items-center gap-4 mt-4">
                  <Link
                    className="bg-subMain hover:text-main transi hover:bg-white text-white px-8 py-3 rounded font-medium names"
                    to={`/stream/watch/${movie.name}`}
                  >
                    watch
                  </Link>
                  <span className="bg-white flex justify-center cursor-pointer items-center hover:text-subMain transi text-white px-3 py-3 rounded bg-opacity-30 ">
                    <FaHeart />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default Banner;
