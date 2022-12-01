import styled from "styled-components";
import { Column, Heading2, Section, SectionTitle } from "../GlobalStyles";
import verical from "../assets/my-vertical.PNG";
import memory from "../assets/memory.PNG";
import Card from "./Card";
import useInView from "./useInView";
import AnimatedText from "./AnimatedText";

const projectCards = [
  {
    id: 1,
    img: verical,
    heading: "My Vertical World",
    text: `Browser based platform for climbers created with Django on the backend and React on the frontend.
     With use of Canvas API you can draw climbing route path on the wall image and than add its location on map provided by OpenLayers API.
     Frontend styling with Styled Components.`,
    link: "https://my-vertical-world-railway-production.up.railway.app/",
    github: "https://github.com/szalashaska/my-vertical-world",
  },
  {
    id: 2,
    img: memory,
    heading: "Memory Card Game",
    text: `Simple web app - browser based game created with HTML, CSS, JavaScript and Pythons's Flask on backend.
     In game you are looking for matching pairs by fliping cards. With the use of Pexels API (photos stock) you can choose theme of the cards you are playing with.`,
    link: "https://memory-timetoplay.herokuapp.com/",
    github: "https://github.com/szalashaska/memory",
  },
];

const ProjectsStyled = styled(Section)`
  flex-direction: column-reverse;
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
  @media screen and (min-width: 900px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Projects = () => {
  const { inView, ref: myRef } = useInView();

  return (
    <ProjectsStyled id="projects" ref={myRef}>
      <Column inView={inView}>
        <Heading2 mb="2rem">Some of my recent projects</Heading2>
        <CardContainer>
          {projectCards.map((card) => (
            <Card
              key={card.id}
              img={card.img}
              heading={card.heading}
              text={card.text}
              link={card.link}
              github={card.github}
            />
          ))}
        </CardContainer>
      </Column>

      <Column inView={true}>
        {inView && <AnimatedText text={"Projects"} />}
        <SectionTitle>Projects</SectionTitle>
      </Column>
    </ProjectsStyled>
  );
};

export default Projects;
