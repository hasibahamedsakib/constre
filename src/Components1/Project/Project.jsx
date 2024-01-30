import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectImg from "/assets/images/project/project-thumb.jpg";
import ProjectImg2 from "/assets/images/project/project-thumb2.jpg";
import ProjectImg3 from "/assets/images/project/project-thumb3.jpg";
import ProjectMain from "./ProjectMain";
import ProjectNavigation from "./ProjectNavigation";

const Project = () => {
  const settings = {
    loop: true,
    spaceBetween: 45,
    modules: [Navigation],
    speed: 400,
    centeredSlides: true,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 57,
      },
    },
  };

  return (
    <section className="project-section py-28 bg-PrimaryColor-0 relative">
      <div className="Container flex flex-col lg:flex-row lg:items-center">
        <div className="flex-1">
          <h5 className="section-sub-title">LATEST WORK</h5>
          <h1 className="text-[30px] leading-9 font-bold mb-4 font-Yantramanav text-white pt-3 md:text-5xl lg:text-4xl xl:text-5xl 2xl:w-[90%]">
            Recently Finished Projects Visit Our Works
          </h1>
        </div>
        <div className="flex-1 lg:text-right">
          <Link to={"/"}>
            <button className="group primary-button hover:text-PrimaryColor-0 before:bg-white after:bg-white inline-block font-Yantramanav px-9 py-4 font-medium">
              All Projects
              <FaArrowRightLong className="inline-block ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
            </button>
          </Link>
        </div>
      </div>
      <div className="pt-10">
        <Swiper {...settings}>
          <SwiperSlide>
            <ProjectMain
              projectImg={ProjectImg}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectMain
              projectImg={ProjectImg2}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectMain
              projectImg={ProjectImg3}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectMain
              projectImg={ProjectImg}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectMain
              projectImg={ProjectImg2}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectMain
              projectImg={ProjectImg3}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </SwiperSlide>

          <ProjectNavigation />
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
