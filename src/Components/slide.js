import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import img1 from "../img/slide1.png";
import img2 from "../img/slide2.png";
import img3 from "../img/slide3.png";
import img4 from "../img/slide4.png";
import img5 from "../img/slide5.png";
import imgBG from "../img/slideBG.png";

const Slide = () => {
  return (
    <>
    <img src={imgBG} className="bg" alt="" />
      <div className="container">
        <div className="slide_tittle">
          <h1>Unsplash graphic</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliquat
            enim ad minim.
          </p>
        </div>
      </div>
      <div className="slide">
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img src={img1} alt="" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slide;
