import Accordion from "./Accordion";

export default function AnimatedAccordionPage() {
  //  All Faqs and  answers.
  const faqs = [
    {
      title: "Project Planning?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "What kinds of Project available?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Do you have any Discount Current Project?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Have you available money back Gaurentee?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: true,
    },
  ];

  return (
    <main className="relative flex flex-col justify-center  overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-6 ">
        <div
          className=" grid items-end grid-cols-1  gap-y-[10px]"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.title}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.text}
            </Accordion>
          ))}
        </div>
      </div>
    </main>
  );
}
