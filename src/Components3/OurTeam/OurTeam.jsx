import SectionHeader from "../SectionHeader/SectionHeader";
import TeamCard from "./TeamCard";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const ourTeamData = [
  {
    id: 1,
    name: "Mst. Aysha Siddika",
    designation: " Junior Engineer",
    image: "./images/home-3/team-member-1.jpg",
  },
  {
    id: 2,
    name: "Mst. Aysha Siddika",
    designation: " Junior Engineer",
    image: "./images/home-3/team-member-2.jpg",
  },
  {
    id: 3,
    name: "Mst. Aysha Siddika",
    designation: " Junior Engineer",
    image: "./images/home-3/team-member-3.jpg",
  },
  {
    id: 4,
    name: "Mst. Aysha Siddika",
    designation: " Junior Engineer",
    image: "./images/home-3/team-member-4.jpg",
  },
];
const OurTeam = () => {
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
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width:1200px)": {
        slides: { perView: 4, spacing: 10 },
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

  return (
    <section className="py-20 2xl:py-[120px] bg-[url('./images/home-3/our-team-bg.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="Container">
        {/* section header */}
        <SectionHeader
          subTitle="Our Professionals"
          title="Our Dedicated Team"
          color="text-white"
        />

        {/* section details */}
        <div className="mt-14 xl:mt-[60px]  keen-slider " ref={sliderRef}>
          {ourTeamData.map(({ id, name, designation, image }) => {
            return (
              <div key={id} className="keen-slider__slide number-slide1 ">
                {" "}
                <TeamCard
                  teamMemberImg={image}
                  name={name}
                  designation={designation}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
