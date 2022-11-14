import styled from "styled-components";
import AnimatedBackground from "../components/AnimatedBackground";
import { Heading1 } from "../GlobalStyles";
import myself from "../assets/myself.jpg";

const HeaderStyled = styled.main`
  position: relative;
`;

const Container = styled.div`
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
  box-shadow: 0 0 10px rgba(79, 70, 83, 0.65);

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
      <Container>
        <Link
          href="https://www.linkedin.com/in/kamil-petryniak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={myself} />
        </Link>
        <Heading1 bold align="center">
          Hi! I am Kamil Petryniak
        </Heading1>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
