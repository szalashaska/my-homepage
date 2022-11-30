import styled from "styled-components";
import {
  Column,
  Heading2,
  Heading3,
  LinkStyled,
  Paragraph,
  Section,
  Wrapper,
} from "../GlobalStyles";

import harvard from "../assets/harvard.png";
import useInView from "./useInView";
import AnimatedText from "./AnimatedText";

const AbouteMeStyled = styled(Section)``;

const Image = styled.img`
  width: 4rem;
`;

const LinkWrapper = styled(LinkStyled)`
  margin-block: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  & p {
    transition: all 0.3s ease-in;
  }
  &:hover p {
    color: #f13a3a;
    letter-spacing: 0.25px;
  }
`;

const AboutMe = () => {
  const { inView, ref: myRef } = useInView();

  return (
    <AbouteMeStyled id="about-me" ref={myRef}>
      <Column inView={true}>
        {inView && <AnimatedText text={"About me"} />}
      </Column>
      <Column inView={inView}>
        <Wrapper>
          <Heading2 mb="2rem">
            Self-taught quick learner looking forward to further develop new
            skills and gain more valuable experience as developer
          </Heading2>

          <Paragraph>
            After 6 years of experience in the field of Civil Engineering, where
            I was involved in design of various constructions, created detailed
            3D BIM models and finally prepared documentation and drawings I
            decided that it is time for a change.
          </Paragraph>

          <Paragraph>
            Since I was always interested in new technologies and computer
            science, I decided to give it a try and took Harvard's CS50 course.
            After a few courses, lots of tutorials and first commercial
            experience I know that it was the best decision I could made.
          </Paragraph>

          <Paragraph>
            As a frontend developer my primary focus is on JavaScript and
            Python.
          </Paragraph>

          <Heading3>Educational background</Heading3>
          <Paragraph>
            I obtained master's degree in Civil Engineering at Lodz University
            of Technology. I took part in students exchange program "Erasmus" at
            Instituto Superior de Engenharia de Lisboa, Portugal.
          </Paragraph>
          <Paragraph>
            In years 2021 and 2022 I participated and completed Harvard's CS50
            courses.
          </Paragraph>

          <LinkWrapper
            href="https://certificates.cs50.io/af44ea8c-2ff8-44ed-a102-cfa8e22f8493.pdf?size=letter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={harvard} alt="Harvard's logo" />
            <Paragraph>CS50's Introduction to Computer Science</Paragraph>
          </LinkWrapper>

          <LinkWrapper
            href="https://certificates.cs50.io/c83d4b4b-b5a1-45d4-bd54-7724ddd6c816.pdf?size=letter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={harvard} alt="Harvard's logo" />
            <Paragraph>
              CS50's Web Programming with Python and JavaScript
            </Paragraph>
          </LinkWrapper>

          <Heading3>Technology stack</Heading3>
          <Paragraph>
            HTML, CSS, JavaScript, TypeScript, Python, C (basics),
          </Paragraph>
          <Paragraph> SQLite, PostgreSQL,</Paragraph>
          <Paragraph>React, Django, Flask,</Paragraph>
          <Paragraph>Styled Components, React Router</Paragraph>
        </Wrapper>
      </Column>
    </AbouteMeStyled>
  );
};

export default AboutMe;
