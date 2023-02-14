import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";
import styled from "styled-components";
import myself from "../assets/myself-removebg.png";
import dark from "../assets/code-dark.jpg";
import light from "../assets/code-light.jpg";

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
`;

const Person = styled.img`
  position: absolute;
  transform: scale(1.4);
  bottom: 5%;
  z-index: 6;
  transition: transform ${transformSpeed} ease-in-out;

  &:hover {
    transform: scale(1.45) translateY(-4%);
  }
`;

const Avatar = () => {
  const { theme } = useContext(ThemeContext);
  const background = theme === "dark" ? light : dark;

  return (
    <Link
      href="https://www.linkedin.com/in/kamil-petryniak/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="See my linkedin account"
    >
      <AvatarContainer>
        <Person src={myself} alt="Picture of Kamil." />
        <Background src={background} alt="" />
      </AvatarContainer>
    </Link>
  );
};

export default Avatar;
