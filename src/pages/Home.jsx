import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const HomeStyled = styled.main`
  background: var(--bg-clr);
  width: 100%;
  overflow-x: hidden;
  height: 100%;
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
      <Footer />
    </>
  );
};

export default Home;
