import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div>
      <Swiper
      direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >



      </Swiper>
    </div>
  );
};

export default Banner;
