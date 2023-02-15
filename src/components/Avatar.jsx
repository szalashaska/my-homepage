import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";
import styled from "styled-components";
import myself from "../assets/myself-removebg.png";
import dark from "../assets/code-dark.jpg";
import light from "../assets/code-light.jpg";
import linkedDark from "../assets/linked-dark.png";
import linkedLight from "../assets/linked-light.png";

const transformSpeed = "0.35s";

const Link = styled.a`
  width: 15rem;

  @media screen and (min-width: 850px) {
    width: 20rem;
  }
`;

const AvatarContainer = styled.div`
  position: relative;
  z-index: 5;
  aspect-ratio: 1 / 1.2;
  display: grid;
  align-items: end;
  border-radius: 0 0 100vw 100vw; // using viewport units here is CSS hack :)
  overflow: hidden;
  transition: transform calc(${transformSpeed} * 1.2) ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Background = styled.img`
  position: absolute;
  aspect-ratio: 1/1;
  width: 100%;
  inset: auto 0 0;
  margin-inline: auto;
  object-fit: cover;
  border-radius: 50%;
  transition: opacity ${transformSpeed} ease-in-out;
`;

const Person = styled.img`
  position: absolute;
  transform: scale(1.35);
  bottom: -8%;
  z-index: 6;
  transition: transform ${transformSpeed} ease-in-out;
  transform-origin: bottom center;

  &:hover {
    transform: scale(1.45) translateY(-4%) rotate(15deg);
  }
`;

const Linkedin = styled.img`
  position: absolute;
  top: 45%;
  left: 35%;
  z-index: 0;
  aspect-ratio: 1/1;
  width: 28%;
  transition: all ${transformSpeed} ease-in-out;

  ${AvatarContainer}:hover & {
    z-index: 5;
    top: 22%;
    left: 15%;
    box-shadow: 0 0 5px rgba(157, 161, 164, 0.95);
  }
`;

const Avatar = () => {
  const { theme } = useContext(ThemeContext);
  const background = theme === "dark" ? light : dark;
  const linkedin = theme === "dark" ? linkedDark : linkedLight;

  return (
    <Link
      href="https://www.linkedin.com/in/kamil-petryniak/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="See my linkedin account"
    >
      <AvatarContainer>
        <Person src={myself} alt="Picture of Kamil." />
        <Linkedin src={linkedin} alt="Logo of Linkedin." />
        <Background src={background} alt="" />
      </AvatarContainer>
    </Link>
  );
};

export default Avatar;
