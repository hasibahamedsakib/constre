/* eslint-disable react/prop-types */

const SectionHeader = ({ textAlign, title, subTitle, color }) => {
  return (
    <div className="text-center">
      <p
        className={`leading-9 md:leading-10 text-sm sm:text-base md:text-lg text-orange font-medium font-Archivo ${
          textAlign ? textAlign : "text-center"
        }`}
      >
        {subTitle}
      </p>
      <h1
        className={`text-3xl md:text-4xl lg:text-[45px] ${
          color ? color : "text-normalBlack"
        } font-bold text-center leading-9 md:leading-10 xl:leading-[45px] font-Yantramanav mt-2 md:mt-[10px]`}
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
