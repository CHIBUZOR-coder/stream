import { useContext, useState, useEffect } from "react";
import { FaUserFriends } from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieContext } from "../../Context/MovieContext";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

const MovieCasts = ({ movieId }) => {
  const [nextEl, setNext] = useState(null);
  const [prevEl, setPrev] = useState(null);
  const { Casts } = useContext(MovieContext);
  const className =
    "hover:bg-dry transi text-sm rounded w-8 h-8 flex flex-col justify-center items-center bg-subMain text-white";

  const selected = Casts.filter((item) => item.movieId === parseInt(movieId));
  console.log(selected);
  

 
  return (
    <div className="px-3 w-full">
      <div className="flex items-center gap-8 md:gap-4">
        <FaUserFriends className="w-6 h-6 md:w-4 md:h-4 text-subMain" />
        <h2 className="sm:text-xl font-bold text-lg">Cast</h2>
      </div>

      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          modules={[Autoplay, Navigation]}
        >
          {selected.map((item) => (
            <SwiperSlide key={item.id} className="w-full p-4">
              <div className="flexCol gap-2  italic w-[80%] text-xs text-text rounded bg-dry border pb-2 ">
                <div
                  style={{
                    backgroundImage: `url('../castImages/${item.image}.jpg')`,
                  }}
                  className="h-[230px] border-gray-800 w-full bg-cover bg-center"
                >
                 
                </div>

                <p>{item.name}</p>
                <p>Role : {item.role}</p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full px-1 flex gap-6 pt-12 justify-center">
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

export default MovieCasts;
