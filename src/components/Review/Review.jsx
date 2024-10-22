import reviewImage from "../../assets/ReviewImage/Review1.png";
// Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Review = () => {
  return (
    <div className="wrapper">
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        centeredSlides={false}
        autoplay={true}
        className=""
      >
        <SwiperSlide>
          <div className="wrapper2">
            <img src={reviewImage} alt="" />
            <span className="p-4 bg-white text-[#F58634] relative bottom-9">
              Jone Doe
            </span>
            <h1 className="text-2xl w-[70%]">
              Buying a house here is very cheap and high quality
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="wrapper2">
            <img src={reviewImage} alt="" />
            <span className="p-4 bg-white text-[#F58634] relative bottom-9">
              Jone Doe
            </span>
            <h1 className="text-2xl w-[70%]">
              Buying a house here is very cheap and high quality
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="wrapper2">
            <img src={reviewImage} alt="" />
            <span className="p-4 bg-white text-[#F58634] relative bottom-9">
              Jone Doe
            </span>
            <h1 className="text-2xl w-[70%]">
              Buying a house here is very cheap and high quality
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="wrapper2">
            <img src={reviewImage} alt="" />
            <span className="p-4 bg-white text-[#F58634] relative bottom-9">
              Jone Doe
            </span>
            <h1 className="text-2xl w-[70%]">
              Buying a house here is very cheap and high quality
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="wrapper2">
            <img src={reviewImage} alt="" />
            <span className="p-4 bg-white text-[#F58634] relative bottom-9">
              Jone Doe
            </span>
            <h1 className="text-2xl w-[70%]">
              Buying a house here is very cheap and high quality
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
