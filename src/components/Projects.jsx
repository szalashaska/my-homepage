import styled from "styled-components";
import {
  Column,
  Heading1,
  Heading2,
  Paragraph,
  Section,
} from "../GlobalStyles";
import verical from "../assets/my-vertical.PNG";
import memory from "../assets/memory.PNG";

const ProjectsStyled = styled(Section)``;

const Card = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 850px) {
    width: 50%;
  }
`;
const Image = styled.img`
  margin-bottom: 1rem;
  border-radius: 20px;
  object-fit: cover;
  overflow: hidden;
`;

const Projects = () => {
  return (
    <ProjectsStyled id="projects">
      <Column>
        <Heading2>Some of my recent projects</Heading2>
        <Card>
          <Image src={verical} />
          <Heading2>My Vertical World</Heading2>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur accusantium, laboriosam error praesentium esse minima
            odio dicta voluptas commodi corrupti dolores impedit beatae aliquid
            omnis tempore amet quae ipsum vitae!
          </Paragraph>
        </Card>

        <Card>
          <Image src={memory} />
          <Heading2>Memory</Heading2>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur accusantium, laboriosam error praesentium esse minima
            odio dicta voluptas commodi corrupti dolores impedit beatae aliquid
            omnis tempore amet quae ipsum vitae!
          </Paragraph>
        </Card>
      </Column>

      <Column>
        <Heading1>Projects</Heading1>
      </Column>
    </ProjectsStyled>
  );
};

export default Projects;
