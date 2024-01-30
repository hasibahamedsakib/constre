import { useEffect, useState } from "react";
import styled from "styled-components";

import { FaArrowUpFromBracket } from "react-icons/fa6";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUpFromBracket className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 1.2rem;
    width: 3rem;
    height: 3rem;
    color: #ff5e14;
    background-color: transparent;
    border: 1px solid #ff5e14;
    box-shadow: ;
    border-radius: 50%;
    position: fixed;
    bottom: 3rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(0.7rem);
      }
    }
  }

  @media (max-width: 768px) {
    .top-btn {
      right: 0;
      left: 85%;
    }
  }
  @media (max-width: 320px) {
    .top-btn {
      right: 0;
      left: 80%;
    }
  }
  .top-btn:hover {
    color: #fff;
    background-color: #ff5e14;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 300ms;
  }
`;

export default GoToTop;
