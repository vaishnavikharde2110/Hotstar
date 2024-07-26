import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";
function Slider() {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src="slider1.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider2.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider3.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider4.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider5.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider6.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider7.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider8.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
