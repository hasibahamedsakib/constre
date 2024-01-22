/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const CountUpAnimation = ({ start, end, duration, delay }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const animateCountUp = (target, duration, startValue, endValue) => {
      let startTime;

      const updateCount = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        const value = startValue + progress * (endValue - startValue);
        target.textContent = value.toFixed(0);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    };

    const element = elementRef.current;
    if (element) {
      setTimeout(() => {
        animateCountUp(element, duration, start, end);
      }, delay);
    }
  }, [start, end, duration, delay]);

  return <span ref={elementRef} />;
};

const CountUpContainer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const countupEls = entry.target.querySelectorAll(".countup");
          countupEls.forEach((el, index) => {
            setTimeout(() => {
              animateCountUp(el, 4000, 1, 0);
            }, index * 700);
          });

          containerObserver.unobserve(entry.target);
        }
      });
    });

    // Observe the container div
    containerObserver.observe(containerRef.current);

    return () => {
      containerObserver.disconnect();
    };
  }, []);

  return (
    <div id="container-four" ref={containerRef}>
      <h2>This example is triggered on scroll</h2>
      <ul>
        <div className="bg-orange inline-block p-10 border-2 border-yellow-400 rounded-full ">
          <CountUpAnimation start={1} end={400} duration={4000} delay={1600} />
        </div>
      </ul>
    </div>
  );
};

export default CountUpContainer;
