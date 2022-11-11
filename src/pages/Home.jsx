import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const HomeStyled = styled.main`
  color: white;
  background: black;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeStyled>
        <Header />
        <AboutMe />
        <Projects />
        <Contacts />
      </HomeStyled>
    </>
  );
};

export default Home;
