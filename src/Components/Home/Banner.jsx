import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../Data/MovieData";

const Banner = () => {
  const movieList = Movies;
  console.log(movieList);

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
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-72  lg:h-72 xl:h-96 bg-dry"
      >
        {movieList.slice(0, 8).map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="bg-center bg-cover relative overflow-hidden rounded"
            style={{
              backgroundImage: `url('./images/${movie.image}.jpg')`,
            }}
          >
            {movie.image}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
