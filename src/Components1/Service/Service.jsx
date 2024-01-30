import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  HiOutlineBuildingLibrary,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";
import { BsBuildings } from "react-icons/bs";
import { GiVikingLonghouse } from "react-icons/gi";
import ServiceMain from "./ServiceMain";
import serviceImg from "/assets/images/service/service_thumb.png";
import serviceImg1 from "/assets/images/service/service_thumb1.png";
import serviceImg2 from "/assets/images/service/service_thumb2.png";
import serviceImg3 from "/assets/images/service/service_thumb3.png";
import ServiceNavigation from "./ServiceNavigation";

const Service = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    modules: [Navigation],
    speed: 400,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <section className="py-28 bg-[#f5f6f8] relative">
      <div className="Container">
        <div>
          <h5 className="section-sub-title">WHAT WE DO</h5>
          <h1 className="text-[30px] leading-9 md:text-5xl font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-3">
            Services What we Provide
          </h1>
          <p className="font-Archivo text-[#575f66] font-light md:w-2/3 lg:w-1/2 mb-14">
            Monotonectally iterate stand-alone bandwidth rather than team driven
            materials done Continually drive client-based e-markets
          </p>
        </div>
        <Swiper {...settings}>
          <SwiperSlide>
            <ServiceMain
              serviceBoxIcon={<HiOutlineBuildingLibrary />}
              serviceBoxTitle="Building Design And Estimating"
              serviceBoxDesc="Compellingly foster B2B inform prospective min"
              url
              serviceBoxImg={serviceImg}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceMain
              serviceBoxIcon={<BsBuildings />}
              serviceBoxTitle="Building Sustainbility Making Service"
              serviceBoxDesc="Compellingly foster B2B inform prospective min"
              url
              serviceBoxImg={serviceImg1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceMain
              serviceBoxIcon={<GiVikingLonghouse />}
              serviceBoxTitle="House Planning & Interior Design"
              serviceBoxDesc="Compellingly foster B2B inform prospective min"
              url
              serviceBoxImg={serviceImg2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceMain
              serviceBoxIcon={<HiOutlineBuildingStorefront />}
              serviceBoxTitle="Build Construction & Design"
              serviceBoxDesc="Compellingly foster B2B inform prospective min"
              url
              serviceBoxImg={serviceImg3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceMain
              serviceBoxIcon={<HiOutlineBuildingLibrary />}
              serviceBoxTitle="Building Design And Estimating"
              serviceBoxDesc="Compellingly foster B2B inform prospective min"
              url
              serviceBoxImg={serviceImg2}
            />
          </SwiperSlide>
          <ServiceNavigation />
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
