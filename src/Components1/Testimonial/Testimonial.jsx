import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CountUp from "react-countup";
import { IoMdStar } from "react-icons/io";
import testiProfile from "/assets/images/testimonial/testimonial-profile.png";
import testiProfile2 from "/assets/images/testimonial/testimonial-profile2.png";
import testiProfile3 from "/assets/images/testimonial/testimonial-profile3.png";
import testiThumb from "/assets/images/testimonial/tesi-left_thumb.jpg";

const Testimonial = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };

  return (
    <section className="py-28 bg-[linear-gradient(_to_right,_#171717_50%,_#ff5e15_50%_)] z-10 relative before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full before:bg-[url('/assets/images/testimonial/testi-shape.png')] before:bg-no-repeat before:animate-[rotateme_10s_linear_infinite] before:bg-left  before:-z-10">
      <div className="Container">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-11 2xl:gap-28">
          <div>
            <div>
              <h5 className="section-sub-title">TESTIMONIAL</h5>
              <h1 className="text-[30px] leading-9 font-bold mb-10 font-Yantramanav text-white pt-3 md:text-5xl lg:text-4xl xl:text-5xl">
                Feedback from our Clients About Services
              </h1>
            </div>
            <div>
              <Swiper pagination={pagination} modules={[Pagination]}>
                <SwiperSlide>
                  <div>
                    <div className="bg-white pt-8 pl-9 pr-5 relative before:absolute before:-bottom-2 before:left-10 before:w-8 before:h-8 before:bg-white before:rotate-45 mb-8 rounded-sm">
                      <p className="font-Archivo font-light text-sm sm:text-lg text-[#575f66] italic">
                        “Completely expedite market positioning synergy whereas
                        pro mindshare. Compellingly leverage other&apos;s
                        integrated growth before best breed total linkage”
                      </p>
                      <ul className="flex gap-1 pt-5 pb-9">
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                      </ul>
                    </div>
                    <div className="ml-5 flex gap-5 items-center">
                      <div>
                        <img src={testiProfile} />
                      </div>
                      <div>
                        <h4 className="font-Yantramanav font-medium text-white text-[22px]">
                          Max D. Harmon
                        </h4>
                        <p className="font-Yantramanav text-[#a5acb2]">
                          Civil Engineer
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="bg-white pt-8 pl-9 pr-5 relative before:absolute before:-bottom-2 before:left-10 before:w-8 before:h-8 before:bg-white before:rotate-45 mb-8 rounded-sm">
                      <p className="font-Archivo font-light text-sm sm:text-lg text-[#575f66] italic">
                        “Completely expedite market positioning synergy whereas
                        pro mindshare. Compellingly leverage other&apos;s
                        integrated growth before best breed total linkage”
                      </p>
                      <ul className="flex gap-1 pt-5 pb-9">
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                      </ul>
                    </div>
                    <div className="ml-5 flex gap-5 items-center">
                      <div>
                        <img src={testiProfile2} />
                      </div>
                      <div>
                        <h4 className="font-Yantramanav font-medium text-white text-[22px]">
                          Dane D. Brewer
                        </h4>
                        <p className="font-Yantramanav text-[#a5acb2]">
                          Interior Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="bg-white pt-8 pl-9 pr-5 relative before:absolute before:-bottom-2 before:left-10 before:w-8 before:h-8 before:bg-white before:rotate-45 mb-8 rounded-sm">
                      <p className="font-Archivo font-light text-sm sm:text-lg text-[#575f66] italic">
                        “Completely expedite market positioning synergy whereas
                        pro mindshare. Compellingly leverage other&apos;s
                        integrated growth before best breed total linkage”
                      </p>
                      <ul className="flex gap-1 pt-5 pb-9">
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                        <li>
                          <IoMdStar className="text-[22px] text-SecondaryColor-0" />
                        </li>
                      </ul>
                    </div>
                    <div className="ml-5 flex gap-5 items-center">
                      <div>
                        <img src={testiProfile3} />
                      </div>
                      <div>
                        <h4 className="font-Yantramanav font-medium text-white text-[22px]">
                          Stacey T. Gregory
                        </h4>
                        <p className="font-Yantramanav text-[#a5acb2]">
                          Project Advisor
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="relative">
            <img src={testiThumb} className="w-full mt-20 lg:max-w-[inherit] lg:w-[inherit]" />
            <div className="absolute bottom-0 left-0">
              <div className="w-28 h-28  bg-[#ffffff6c] flex flex-col justify-center items-center relative z-10 left-2 bottom-2 before:absolute before:top-2 before:left-2 before:w-24 before:h-24 before:bg-PrimaryColor-0 before:-z-10 sm:w-[190px] sm:h-[190px] sm:left-5 sm:bottom-5 sm:before:w-[150px] sm:before:h-[150px] sm:before:top-5 sm:before:left-5">
                <CountUp
                  start={-4.0}
                  end={4.7}
                  decimals={1}
                  decimal="."
                  className="text-3xl sm:text-[50px] font-Yantramanav font-bold text-white"
                />
                <h6 className="font-Yantramanav text-[#8e939f]">AVG Ratings</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
