import styled from "styled-components";

const TextContainer = styled.h1`
  --text-bg: var(--bg-clr);
  --text-clr: var(--font-clr);
  font-family: "Martian Mono", monospace;
  font-size: clamp(2rem, 1.6842rem + 1.4035vw, 3rem);
  color: var(--text-clr);
  width: max-content;
  position: relative;
  background: var(--text-bg);

  // Hide everything for bigger screens
  @media screen and (min-width: 700px) {
    display: none;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -5%;
    right: 0;
    bottom: -5%;
    left: 0;
  }

  &::before {
    background: var(--text-bg);
    ${(props) =>
      props.inView &&
      `
    animation: typing ${props.duration} steps(${props.textLength}) ${props.showDelay} forwards;
      `}
  }

  &::after {
    width: 0.125em;
    background: var(--text-clr);
    opacity: 1;

    ${(props) =>
      props.inView &&
      `
    animation: blink ${props.blinkSpeed} steps(${props.textLength}) infinite,
      typing ${props.duration} steps(${props.textLength}) ${props.showDelay} forwards;
     `}
  }

  @keyframes typing {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      opacity: 0;
    }
  }
`;

const TypedText = ({
  inView,
  text,
  duration = 2,
  blinkSpeed = 0.7,
  showDelay = 0.75,
}) => {
  const { length } = text;
  return (
    <TextContainer
      inView={inView}
      textLength={length}
      duration={`${duration}s`}
      blinkSpeed={`${blinkSpeed}s`}
      showDelay={`${showDelay}s`}
    >
      {text}
    </TextContainer>
  );
};

export default TypedText;
