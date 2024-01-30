import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import TeamImg from "/assets/images/team/team01.jpg";
import TeamImg2 from "/assets/images/team/team02.jpg";
import TeamImg3 from "/assets/images/team/team03.jpg";
import { FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import TeamMain from "./TeamMain";

const TeamMember = () => {
  const settings = {
    loop: false,
    spaceBetween: 30,
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
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className="py-28 bg-[url('/assets/images/team/team-bg.jpg')] bg-no-repeat bg-center">
      <div className="Container">
        <div className="text-center">
          <h5 className="section-sub-title">OUR EXPERTS</h5>
          <h1 className="text-[30px] leading-9 md:text-5xl font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-3">
            Meet Our Expert Enginears
          </h1>
        </div>

        <div className="pt-11">
          <Swiper {...settings} mousewheel={true} modules={[Mousewheel]}>
            <SwiperSlide>
              <TeamMain
                teamBoxImg={TeamImg}
                teamBoxTitle={"John D. Alexon"}
                teamBoxDesignation={"Civil Engineer"}
                teamBoxIcon={<FaLinkedinIn />}
                teamBoxIcon2={<FaPinterestP />}
                teamBoxIcon3={<FaXTwitter />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamMain
                teamBoxImg={TeamImg3}
                teamBoxTitle={"John D. Alexon"}
                teamBoxDesignation={"Civil Engineer"}
                teamBoxIcon={<FaLinkedinIn />}
                teamBoxIcon2={<FaPinterestP />}
                teamBoxIcon3={<FaXTwitter />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamMain
                teamBoxImg={TeamImg2}
                teamBoxTitle={"John D. Alexon"}
                teamBoxDesignation={"Civil Engineer"}
                teamBoxIcon={<FaLinkedinIn />}
                teamBoxIcon2={<FaPinterestP />}
                teamBoxIcon3={<FaXTwitter />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamMain
                teamBoxImg={TeamImg}
                teamBoxTitle={"John D. Alexon"}
                teamBoxDesignation={"Civil Engineer"}
                teamBoxIcon={<FaLinkedinIn />}
                teamBoxIcon2={<FaPinterestP />}
                teamBoxIcon3={<FaXTwitter />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamMain
                teamBoxImg={TeamImg3}
                teamBoxTitle={"John D. Alexon"}
                teamBoxDesignation={"Civil Engineer"}
                teamBoxIcon={<FaLinkedinIn />}
                teamBoxIcon2={<FaPinterestP />}
                teamBoxIcon3={<FaXTwitter />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamMain
                teamBoxImg={TeamImg2}
                teamBoxTitle={"John D. Alexon"}
                teamBoxDesignation={"Civil Engineer"}
                teamBoxIcon={<FaLinkedinIn />}
                teamBoxIcon2={<FaPinterestP />}
                teamBoxIcon3={<FaXTwitter />}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
