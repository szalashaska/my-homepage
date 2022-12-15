import { cloneElement, useEffect, useState } from "react";
import { useRef } from "react";
import { Children } from "react";
import styled from "styled-components";

const DISPLAY_OPTIONS = [
  { translate: 100, width: 100 }, // 1 item in view, slide by 1.
  { translate: 75, width: 75 }, // 1.5 items in view, slide by 1.
  { translate: 50, width: 50 }, // 2 items in view, slide by 1.
  { translate: 100, width: 50 }, // 2 items in view, slide by 2.
];

const CaruselStyled = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  &::after {
    content: "";
    top: 0;
    right: 0;
    position: absolute;
    width: 25%;
    height: 100%;
    z-index: 100;
    background: linear-gradient(to right, transparent, var(--bg-clr));
    display: ${(props) => (props.blurRightSide ? "block" : "none")};
  }
`;

const CaruselItemStyled = styled.div`
  width: ${(props) => props.width};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const InnerCarusel = styled.div`
  transform: translateX(-${(props) => props.translate}%);
  white-space: nowrap;
  transition: transform 0.3s;
`;

const Indicators = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const DotButton = styled.button`
  --dot-size: 1rem;
  background-color: var(--font-clr);
  box-shadow: ${(props) =>
    props.active ? "0 0 15px 3px var(--font-clr)" : ""};
  border: none;
  border-radius: 50%;
  width: var(--dot-size);
  height: var(--dot-size);
  cursor: pointer;
  transition: all 0.3s;
  &:hover,
  &:focus {
    box-shadow: 0 0 15px var(--font-clr);
  }
`;

const NextPrevButton = styled.button`
  --button-size: 2rem;
  position: absolute;
  right: ${(props) => (props.right ? "2%" : "auto")};
  left: ${(props) => (props.left ? "2%" : "auto")};
  top: 50%;
  z-index: 150;
  background-color: var(--font-clr);
  font-weight: 500;
  box-shadow: 0 0 10px var(--font-clr);
  border: none;
  border-radius: 50%;
  width: var(--button-size);
  height: var(--button-size);
  cursor: pointer;
  opacity: ${(props) => (props.visable ? 1 : 0)};

  transition: opacity 1s, transform 0.3s;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  & span {
    position: absolute;
    display: block;
    width: 50%;
    height: 3px;
    background: var(--bg-clr);
    transform-origin: center ${(props) => (props.left ? "left" : "right")};
    border-radius: 30%;
  }
  & span:first-of-type {
    transform: ${(props) =>
      props.left
        ? "translate(50%, 25%) rotate(-35deg)"
        : "translate(50%, 25%) rotate(35deg)"};
  }
  & span:last-of-type {
    transform: ${(props) =>
      props.left
        ? "translate(50%, -25%) rotate(35deg)"
        : "translate(50%, -25%) rotate(-35deg)"};
  }
`;

export const CaruselItem = ({ children, width }) => {
  return <CaruselItemStyled width={width}>{children}</CaruselItemStyled>;
};

const Carusel = ({ children, displayOption }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const touchStratCoordsRef = useRef(null);

  let displayVariant;

  if (
    !displayOption ||
    displayOption < 0 ||
    displayOption >= displayOption.length
  )
    displayVariant = DISPLAY_OPTIONS[0];
  else {
    displayVariant = DISPLAY_OPTIONS[displayOption];
  }

  const updateIndex = (newIndex) => {
    const childrenCount = Children.count(children);
    if (newIndex < 0) {
      newIndex = childrenCount - 1;
    } else if (newIndex >= childrenCount) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handleSwipeOnTouchscreen = (endCoords) => {
    if (!touchStratCoordsRef.current) return;

    const startCoords = touchStratCoordsRef.current;
    // Minimal swipe distance = 50
    if (Math.abs(startCoords - endCoords) < 50) return;

    if (startCoords > endCoords) updateIndex(activeIndex + 1);
    else if (startCoords < endCoords) updateIndex(activeIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovering) updateIndex(activeIndex + 1);
    }, 5000);

    return () => {
      if (interval) clearInterval(interval);
    };
  });

  return (
    <CaruselStyled
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={(e) => {
        touchStratCoordsRef.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        handleSwipeOnTouchscreen(e.changedTouches[0].clientX);
      }}
      blurRightSide={displayOption === 1}
    >
      <InnerCarusel translate={activeIndex * displayVariant.translate}>
        {Children.map(children, (child, index) =>
          cloneElement(child, { width: `${displayVariant.width}%` })
        )}

        {/* First ELement is cloned and put at the end*/}
        {cloneElement(children[0], {
          width: `${displayVariant.width}%`,
        })}
      </InnerCarusel>
      <Indicators>
        <NextPrevButton
          type="button"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          left
          aria-label="Previous project button."
          visable={hovering}
        >
          <span />
          <span />
        </NextPrevButton>
        {Children.map(children, (child, index) => (
          <DotButton
            active={index === activeIndex}
            type="button"
            onClick={() => {
              updateIndex(index);
            }}
            title={`Carusel index numer ${index + 1} button.`}
            aria-label={`Carusel index numer ${index + 1} button.`}
          ></DotButton>
        ))}
        <NextPrevButton
          type="button"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          right
          aria-label="Next project button."
          visable={hovering}
        >
          <span />
          <span />
        </NextPrevButton>
      </Indicators>
    </CaruselStyled>
  );
};

export default Carusel;
