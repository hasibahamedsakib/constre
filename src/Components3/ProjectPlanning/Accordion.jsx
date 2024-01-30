import { useState, useEffect } from "react";

export default function Accordion({ children, title, id, active }) {
  console.log(active);
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div className="py-2 w-full 2xl:w-[610px] ">
      <h2>
        <button
          className="flex items-center justify-between w-full 2xl:w-[610px] text-left font-semibold font-Garamond hover:bg-[#0b1537] focus:bg-[#0b1537] p-5 md:px-6 md:py-5 lg:px-[30px] lg:py-5 group bg-[#0b1537]"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id} `}
        >
          <span
            className={` font-Yantramanav text-base sm:text-lg md:text-xl 2xl:text-[22px] ${
              accordionOpen ? "text-orange" : "text-white"
            } hover:text-orange transition-all duration-300 font-medium leading-7 md:leading-8 lg:leading-10`}
          >
            {title}
          </span>
          <svg
            className="fill-white  shrink-0 ml-8 "
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm sm:text-base font-Archivo font-light leading-[26px] text-wheat overflow-hidden transition-all duration-300 ease-in-out px-5 md:px-6 lg:px-[30px]   bg-[#0b1537] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden ">
          <p className="py-2 sm:py-4 pb-5 text-sm sm:text-base font-Archivo font-light leading-[28px] text-graySmoke">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
