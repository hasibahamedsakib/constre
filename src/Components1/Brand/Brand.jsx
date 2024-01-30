import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import brandImg from "/assets/images/brand/brand-thumb.png";
import brandImg2 from "/assets/images/brand/brand-thumb2.png";
import brandImg3 from "/assets/images/brand/brand-thumb3.png";
import brandImg4 from "/assets/images/brand/brand-thumb4.png";

const Brand = () => {
  const settings = {
    loop: true,
    speed: 400,
    initialSlide: 1,
    spaceBetween: 30,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <div className="py-28 bg-[#f5f6f8]">
      <div className="Container ">
        <Swiper {...settings}>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[170px] w-full bg-white relative before:absolute  before:left-1/2 before:w-4/5 before:h-4/5 before:border before:border-dashed before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[#bcc2c9] before:transition-all before:duration-500 group hover:before:border-black">
              <div>
                <img
                  src={brandImg}
                  className="group-hover:brightness-0 transition-all duration-500"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[170px] w-full bg-white relative before:absolute  before:left-1/2 before:w-4/5 before:h-4/5 before:border before:border-dashed before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[#bcc2c9] before:transition-all before:duration-500 group hover:before:border-black">
              <div>
                <img
                  src={brandImg2}
                  className="group-hover:brightness-0 transition-all duration-500"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[170px] w-full bg-white relative before:absolute  before:left-1/2 before:w-4/5 before:h-4/5 before:border before:border-dashed before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[#bcc2c9] before:transition-all before:duration-500 group hover:before:border-black">
              <div>
                <img
                  src={brandImg3}
                  className="group-hover:brightness-0 transition-all duration-500"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[170px] w-full bg-white relative before:absolute  before:left-1/2 before:w-4/5 before:h-4/5 before:border before:border-dashed before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[#bcc2c9] before:transition-all before:duration-500 group hover:before:border-black">
              <div>
                <img
                  src={brandImg4}
                  className="group-hover:brightness-0 transition-all duration-500"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[170px] w-full bg-white relative before:absolute  before:left-1/2 before:w-4/5 before:h-4/5 before:border before:border-dashed before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[#bcc2c9] before:transition-all before:duration-500 group hover:before:border-black">
              <div>
                <img
                  src={brandImg}
                  className="group-hover:brightness-0 transition-all duration-500"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
