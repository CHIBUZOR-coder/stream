import { FaUserFriends } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";

const MovieCasts = () => {
  return (
    <div className=" px-3">
      <div className="flex items-center gap-8 md:gap-4">
        <FaUserFriends className=" w-6 h-6 md:w-4 md:h-4 text-subMain" />
        <h2 className=" sm:text-xl font-bold text-lg ">Cast</h2>
      </div>

      <div className="mt-10">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          sp
          autoplay={{ delay: 1000, disableOnInteraction: false }}
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
               spaceBetween:30
             
            },
          }}
          className="w-full h-72  lg:h-72 xl:h-96 bg-dry"
        ></Swiper>
      </div>
    </div>
  );
};

export default MovieCasts;
