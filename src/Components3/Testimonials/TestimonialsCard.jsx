const TestimonialsCard = ({
  testimonialsUser,
  clientFeedback,
  clientName,
  role,
  testiQute,
}) => {
  return (
    <div className="bg-wheat p-5 sm:p-7 md:p-8 lg:px-[35px] lg:py-10 relative testimonials-outer">
      <p className="text-sm sm:text-base md:text-[17px] tracking-[1px] leading-7 text-gray font-medium italic font-Archivo  ">
        {clientFeedback}
      </p>
      <div className="flex items-center justify-between mt-5 sm:mt-8 md:mt-9 lg:mt-10 xl:mt-11 2xl:mt-[50px] ">
        <div className="flex  items-center ">
          <img
            src={testimonialsUser}
            draggable={!true}
            alt="testimonials User image"
            className="rounded-full "
          />
          <div className="px-2 sm:px-[25px]">
            <h5 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-medium text-normalBlack leading-7 font-Yantramanav">
              {clientName}
            </h5>
            <p className="text-sm sm:text-base leading-7 text-graySmoke font-normal font-Archivo">
              {role}
            </p>
          </div>
        </div>
        <img
          src={testiQute}
          alt="testi qute"
          className="scale-x-[-1] w-[50px] sm:w-auto"
        />
      </div>
    </div>
  );
};

export default TestimonialsCard;
