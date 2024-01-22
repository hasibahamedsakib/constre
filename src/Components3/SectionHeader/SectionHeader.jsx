/* eslint-disable react/prop-types */

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <p className="leading-9 md:leading-10 text-sm sm:text-base md:text-lg text-orange font-medium text-center font-Archivo">
        {subTitle}
      </p>
      <h1 className="text-3xl md:text-4xl lg:text-[45px] text-normalBlack font-bold text-center leading-9 md:leading-10 xl:leading-[45px] font-Yantramanav mt-2 md:mt-[10px]">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
