import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./testimonials.css";
import TestimonialsCard from "./TestimonialsCard";

const testiQute = "./images/home-3/testi-qute.png";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const testimonialsData = [
    {
      id: 1,
      testimonialsUser: "./images/home-3/testi-user.png",
      clientFeedback: ` I noticed one thing it is very productive to discuss a  project with pople who have clients technical background. I forgot how to explain obvious technical things that then theren happen with more humanitarian people and just more done I noticeone thing from this background.forgot how to explain obvious technical.`,
      clientName: "Mr All-Amin Hossain",
      role: "Customer",
      testiQute: testiQute,
    },
    {
      id: 2,
      testimonialsUser: "./images/home-3/about-user.jpg",
      clientFeedback: ` I noticed one thing it is very productive to discuss a  project with pople who have clients technical background. I forgot how to explain obvious technical things that then theren happen with more humanitarian people and just more done I noticeone thing from this background.forgot how to explain obvious technical.`,
      clientName: "Mr Hasib Ahamed",
      role: "Pro-Customer",
      testiQute: testiQute,
    },
    {
      id: 3,
      testimonialsUser: "./images/home-3/testi-user.png",
      clientFeedback: ` I noticed one thing it is very productive to discuss a  project with pople who have clients technical background. I forgot how to explain obvious technical things that then theren happen with more humanitarian people and just more done I noticeone thing from this background.forgot how to explain obvious technical.`,
      clientName: "Jk John Doe",
      role: "Gold-Customer",
      testiQute: testiQute,
    },
  ];

  return (
    <section className="py-20 2xl:pt-[180px] 2xl:pb-[120px]">
      <div className="Container grid grid-cols-5  items-center 2xl:gap-[30px]">
        <div className="col-span-5 lg:col-span-2 text-left pr-5">
          <img
            src={testiQute}
            alt="testi qute"
            draggable={!true}
            className="w-[50px] sm:w-auto"
          />
          <p className="leading-9 text-sm sm:text-base md:text-lg text-orange font-medium font-Archivo mt-5">
            What People Say
          </p>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-[45px] text-normalBlack font-bold leading-9 md:leading-10 xl:leading-[45px] 2xl:leading-[55px] font-Yantramanav mt-2 md:mt-[10px]">
            Trusted From Over 2,500 Clients
          </h1>

          <p className="text-base leading-7 text-graySmoke font-light font-Archivo mt-2 lg:mt-4">
            Sometimes by accident publishing and web page editors team accident
            their default model in and a search accident dreamer in have evolved
            over sometimes on purpose.
          </p>
        </div>
        <div
          className="col-span-5 lg:col-span-3 lg:ml-2 xl:ml-5 2xl:ml-20 keen-slider relative py-5 2xl:w-[730px]"
          ref={sliderRef}
        >
          {testimonialsData.map(
            ({
              id,
              clientFeedback,
              clientName,
              role,
              testiQute,
              testimonialsUser,
            }) => {
              return (
                <div key={id} className="keen-slider__slide number-slide1 ">
                  <TestimonialsCard
                    clientFeedback={clientFeedback}
                    clientName={clientName}
                    role={role}
                    testiQute={testiQute}
                    testimonialsUser={testimonialsUser}
                  />
                </div>
              );
            }
          )}

          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";

  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled} text-base`}
    >
      {props.left && (
        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
      )}
      {!props.left && (
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path>
      )}
    </svg>
  );
}
export default Testimonials;
