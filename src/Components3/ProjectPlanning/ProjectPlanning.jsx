import AnimatedAccordionPage from "./AccordionPage.jsx";

const faqImage = "./images/home-3/faq-img.jpg";

const ProjectPlanning = () => {
  return (
    <section className="bg-[url('./images/home-3/faq-bg.jpg')] bg-center bg-cover bg-no-repeat 2xl:h-[690px] w-full">
      <div className=" flex items-center  2xl:h-[690px] ">
        <div className="flex-1 h-full">
          <img
            src={faqImage}
            alt="faq image "
            draggable={!true}
            className="w-full h-full"
          />
        </div>
        <div className="flex-1 ml-10 2xl:ml-20">
          <h1 className="text-3xl">
            <AnimatedAccordionPage />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ProjectPlanning;
