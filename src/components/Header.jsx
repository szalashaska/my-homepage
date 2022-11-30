import styled from "styled-components";
import AnimatedBackground from "../components/AnimatedBackground";
import { Heading1 } from "../GlobalStyles";
import myself from "../assets/myself.jpg";
import useInView from "./useInView";

const HeaderStyled = styled.main`
  position: relative;
  height: 100vh;
`;

const Container = styled.div`
  height: 100%;
  position: relative;
  z-index: 2;
  padding: 1rem;
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
  @media screen and (min-width: 850px) {
    height: 24rem;
  }
  @media screen and (min-width: 1500px) {
    height: 26rem;
  }
`;

const Header = () => {
  const { inView, ref: myRef } = useInView();

  return (
    <HeaderStyled ref={myRef} id="home">
      {inView && <AnimatedBackground />}
      <Container>
        <Link
          href="https://www.linkedin.com/in/kamil-petryniak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={myself} alt="Picture of Kamil" />
        </Link>
        <Heading1 bold align="center">
          Hi! I am Kamil Petryniak
        </Heading1>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
