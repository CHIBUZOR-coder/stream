import { useState } from "react";
import {
  BsBookmarkStarFill,
  BsCaretLeft,
  BsCaretLeftFill,
  BsCaretRight,
  BsCaretRightFill,
  BsChevronLeft,
} from "react-icons/bs";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../Data/MovieData";
import { FaHeart, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Star from "./Star";
import { memo } from "react";

const TopRated = () => {
  const [nextEl, setNext] = useState(null);
  const [prevEl, setPrev] = useState(null);
  const className =
    "hover:bg-dry transi text-sm rounded w-8 h-8 flex flex-col justify-center items-center bg-subMain text-white";

  const SearchHeartIcon = memo(() => <BsFillSearchHeartFill />);

  return (
    <div className="my-16">
      <div className="flex font-bold gap-4 my-6 items-center ">
        <BsBookmarkStarFill className="text-subMain" />
        <p className=" font bold">Top Rated</p>
      </div>

      <div>
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {Movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className=" h-rate border border-border bg-cover bg-center">
                <img src={`./images/${movie.image}.jpg`} loading="lazy" className="w-full h-full object-cover " alt="" />
                <div className=" gap-6 hovered   absolute bg-blacktrans h-full w-full   left-0 right-0 bottom-0">
                  <div className="w-full hovers  bg-black bg-opacity-60 object-cover  flex flex-col relative justify-center gap-5 items-center h-full">
                    <button className="w-12 h-12 flex  justify-center items-center transi hover:bg-subMain rounded-full bg-white bg-opacity-30  text-white">
                      <FaHeart />
                    </button>
                    <Link
                      to={`/movie/${movie.name}`}
                      className=" text-center font-semibold text-xl line-clamp-2"
                    >
                      {movie.name}
                    </Link>

                    <div className="flex  gap-2 text-star ">
                      <Star value={movie.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full px-1 flex gap-6 pt-12  justify-center">
          <button className={className} ref={(node) => setPrev(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={className} ref={(node) => setNext(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
