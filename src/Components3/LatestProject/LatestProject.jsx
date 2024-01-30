import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./project.css";
import ProjectCard from "./ProjectCard";

const LatestProject = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:992px)": {
        slides: { perView: 3, spacing: 15 },
      },

      "(min-width:1600px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const projectData = [
    {
      id: 1,
      projectImg: "./images/home-3/project-1.jpg",
      projectName: "This is Project One",
      projectInfo: "Project info is hear",
      controlUrl: "#",
      linkUrl: "#",
    },
    {
      id: 2,
      projectImg: "./images/home-3/project-2.jpg",
      projectName: "This is Project Two",
      projectInfo: "Project info is hear",
      controlUrl: "#",
      linkUrl: "#",
    },
    {
      id: 3,
      projectImg: "./images/home-3/project-3.jpg",
      projectName: "This is Project Three",
      projectInfo: "Project info is hear",
      controlUrl: "#",
      linkUrl: "#",
    },
    {
      id: 4,
      projectImg: "./images/home-3/project-4.jpg",
      projectName: "This is Project four",
      projectInfo: "Project info is hear",
      controlUrl: "#",
      linkUrl: "#",
    },
  ];

  return (
    <section className="py-20 2xl:py-[120px]">
      {/* Section header */}
      <div className="Container flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row items-center justify-between">
        <SectionHeader
          textAlign="text-left"
          subTitle="Latest Project"
          title="Explore Recent Projects"
        />
        <Link to="#">
          <button className="w-[150px] h-[50px] xl:w-[200px] xl:h-[56px] bg-orange hover:bg-[#c43e00] transition-all duration-300 rounded-md font-Yantramanav text-white text-base md:text-md 2xl:text-lg flex items-center justify-center">
            View All Details
            <FaArrowRight className="text-white ml-2" size={16} />
          </button>
        </Link>
      </div>

      <div className="px-1 sm:px-5 2xl:px-[30px]">
        {/* section slider content */}
        <div className="mt-14 xl:mt-[60px]  keen-slider " ref={sliderRef}>
          {projectData.map(
            ({
              id,
              projectImg,
              projectName,
              projectInfo,
              controlUrl,
              linkUrl,
            }) => {
              return (
                <div key={id} className="keen-slider__slide number-slide1 ">
                  <ProjectCard
                    projectImg={projectImg}
                    projectName={projectName}
                    projectInfo={projectInfo}
                    controlUrl={controlUrl}
                    linkUrl={linkUrl}
                  />
                </div>
              );
            }
          )}
        </div>
        <div className="flex items-center justify-center mt-10 ">
          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
