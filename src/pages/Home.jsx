import { BrowserRouter } from "react-router-dom";
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
      <HomeStyled>
        <BrowserRouter>
          <Navbar />
          <Header />
          <AboutMe />
          <Projects />
          <Contacts />
        </BrowserRouter>
      </HomeStyled>
    </>
  );
};

export default Home;
