import AnimatedAccordionPage from "./AccordionPage.jsx";

const faqImage = "./images/home-3/faq-img.jpg";

const ProjectPlanning = () => {
  return (
    <section className="bg-[url('./images/home-3/faq-bg.jpg')] bg-center bg-cover bg-no-repeat h-full lg:min-h-[690px] lg:max-h-full w-full lg:grid items-center">
      <div className=" flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 items-center  h-full lg:min-h-[690px] lg:max-h-full ">
        <div
          className="flex-1 h-full"
          data-aos="zoom-in-down"
          data-aos-duration="1100"
        >
          <img
            src={faqImage}
            alt="faq side-image"
            draggable={!true}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 lg:ml-10 2xl:ml-20 py-6 xl:py-0 pb-6 md:pb-8 lg:pb-0">
          <AnimatedAccordionPage />
        </div>
      </div>
    </section>
  );
};

export default ProjectPlanning;
