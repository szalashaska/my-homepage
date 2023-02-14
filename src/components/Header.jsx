import styled from "styled-components";
import AnimatedBackground from "../components/AnimatedBackground";
import { Heading1 } from "../GlobalStyles";
import useInView from "../hooks/useInView";
import Avatar from "./Avatar";

const HeaderStyled = styled.main`
  position: relative;
  height: 100vh;
`;

const Container = styled.div`
  height: 100%;
  position: relative;
  /* z-index: 2; */
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

const Header = () => {
  const { inView, ref: myRef } = useInView();

  return (
    <HeaderStyled ref={myRef} id="home">
      {inView && <AnimatedBackground />}
      <Container>
        <Avatar />
        <Heading1 bold align="center">
          Hi! I am Kamil Petryniak
        </Heading1>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
