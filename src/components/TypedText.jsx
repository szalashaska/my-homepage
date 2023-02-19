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
    animation: typing ${(props) => props.duration}
      steps(${(props) => props.textLength}) ${(props) => props.showDelay}
      forwards;
  }

  &::after {
    width: 0.125em;
    background: var(--text-clr);
    opacity: 1;
    animation: blink ${(props) => props.blinkSpeed}
        steps(${(props) => props.textLength}) infinite,
      typing ${(props) => props.duration} steps(${(props) => props.textLength})
        ${(props) => props.showDelay} forwards;
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
  text,
  duration = 2,
  blinkSpeed = 0.7,
  showDelay = 0.75,
}) => {
  const { length } = text;
  console.log(length);
  return (
    <TextContainer
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
