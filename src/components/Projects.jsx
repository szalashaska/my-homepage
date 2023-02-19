import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Column, Heading2, Section } from "../GlobalStyles";
import Card from "./Card";
import useInView from "../hooks/useInView";
import AnimatedText from "./AnimatedText";
import Carusel, { CaruselItem } from "./Carusel";
import { projectCards } from "../helpers/cardsData";
import TypedText from "./TypedText";

const ProjectsStyled = styled(Section)`
  flex-direction: column-reverse;
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

const Projects = () => {
  const { inView, ref: myRef } = useInView();
  const caruselContainerRef = useRef();
  const [caruselWidth, setCaruselWidth] = useState();

  const updateCaruselWidth = () => {
    if (!caruselContainerRef.current) return;
    setCaruselWidth(caruselContainerRef.current.clientWidth);
  };

  useEffect(() => {
    if (caruselContainerRef.current) {
      let observer;
      observer = new ResizeObserver(updateCaruselWidth).observe(
        caruselContainerRef.current
      );
      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);

  return (
    <ProjectsStyled id="projects" ref={myRef}>
      <Column inView={inView} ref={caruselContainerRef}>
        <Heading2 mb="2rem">Some of my recent projects</Heading2>
        <Carusel displayOption={caruselWidth < 500 ? 0 : 1}>
          {projectCards.map((card) => (
            <CaruselItem key={card.id}>
              <Card key={card.id} cardData={card} />
            </CaruselItem>
          ))}
        </Carusel>
      </Column>

      <Column inView={true}>
        {inView && <AnimatedText text={"Projects"} aria-label="Projects" />}
        <TypedText text={"Projects."} />
      </Column>
    </ProjectsStyled>
  );
};

export default Projects;
