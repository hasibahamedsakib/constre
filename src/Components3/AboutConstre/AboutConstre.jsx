const constreAbout = "./images/home-3/about-image.png";
const shapeAbout = "./images/home-3/about-shape.png";
const aboutUser = "./images/home-3/about-user.jpg";
const aboutUserSign = "./images/home-3/about-sign.png";

const AboutConstre = () => {
  return (
    <section className="bg-[url('./images/home-3/about-bg.jpg')] bg-center bg-cover bg-no-repeat h-full 3xl:h-[870px] grid items-center py-20 2xl:py-[120] relative">
      <div className="Container flex flex-col lg:flex-row gap-10 items-center justify-between  px-3">
        {/* about content */}
        <div
          className=" w-full lg:w-[530px] font-Archivo "
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <p className="text-sm sm:text-base md:text-lg font-medium text-orange ">
            About Constre Company
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[45px] text-white font-bold py-2 leading-18 md:leading-9 lg:leading-10 xl:leading-[55px] font-Yantramanav mb-[10px] 2xl:pr-[35px]">
            {'Our Guaranteed Quality in Construction"'}
          </h1>
          <p className="text-sm sm:text-base leading-7 text-graySmoke  font-light font-Archivo mb-[15px]">
            Sometimes by accident publishing packages and web page editors now
            accident publishing as their default model text and a search acciden
            dreamer have evolved over the years, sometimes on purpose.
          </p>
          <p className="text-sm sm:text-base leading-7 text-graySmoke  font-light font-Archivo ">
            ensure proactive domination bring to the table win-win survival
            company proactive domination going forward, a new normal
          </p>

          <div className="flex  items-center mt-8 md:mt-9 lg:mt-10 xl:mt-11 2xl:mt-[50px] gap-2 sm:gap-3 md:gap-[15px] lg:gap-[30px] ">
            <div
              className=" h-[85px] rounded-md bg-deepBlue 
            py-[5px] px-[7px] flex items-center"
            >
              <img
                src={aboutUser}
                draggable={!true}
                alt="about User image"
                className="rounded-md"
              />
              <div className="px-3 sm:px-[30px]">
                <h5 className="text-sm sm:text-base md:text-lg xl:text-xl font-medium text-orange leading-5 sm:leading-7 font-Yantramanav">
                  Mr. Hasib Ahamed
                </h5>
                <p className="text-sm sm:text-base leading-7 text-graySmoke font-normal font-Archivo">
                  Founder
                </p>
              </div>
            </div>
            <img
              src={aboutUserSign}
              draggable={!true}
              alt="about User sign"
              className="w-[80px] sm:w-auto"
            />
          </div>
        </div>

        {/* about image */}
        <div
          className="py-6 xl:py-0"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        >
          <img
            src={constreAbout}
            draggable={!true}
            alt="about section image."
            className="object-cover "
          />
        </div>
      </div>
      {/* shape img */}
      <div className="absolute left-10 2xl:left-[70px] bottom-0 2xl:bottom-[120px] animate-wiggle w-[80px] xl:w-[100px] 2xl:w-auto ">
        <img src={shapeAbout} draggable={!true} alt="" />
      </div>
    </section>
  );
};

export default AboutConstre;
