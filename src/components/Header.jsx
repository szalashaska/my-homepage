import styled from "styled-components";
import AnimatedBackground from "../components/AnimatedBackground";
import { Heading1 } from "../GlobalStyles";
import Myself from "../assets/myself.jpg";

const HeaderStyled = styled.main`
  position: relative;
  color: black;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  text-shadow: 0 0 5px rgba(225, 185, 250, 0.65);
  @media screen and (min-width: 850px) {
    flex-direction: row;
  }
`;

const Link = styled.a``;

const Image = styled.img`
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  height: 18rem;
  transition: box-shadow 0.5s ease-out;
  &:hover,
  &:focus {
    box-shadow: 0 0 25px rgba(225, 185, 250, 0.65);
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <AnimatedBackground />
      <Wrapper>
        <Link
          href="https://www.linkedin.com/in/kamil-petryniak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Myself} />
        </Link>
        <Heading1 bold align="center">
          Hi! I' am Kamil Petryniak
        </Heading1>
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
