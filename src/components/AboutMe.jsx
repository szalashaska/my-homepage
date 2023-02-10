import styled from "styled-components";
import {
  Column,
  Heading2,
  LinkStyled,
  Paragraph,
  Section,
  SectionTitle,
  Wrapper,
} from "../GlobalStyles";

import harvard from "../assets/harvard.png";
import useInView from "../hooks/useInView";
import AnimatedText from "./AnimatedText";

const AbouteMeStyled = styled(Section)``;

const Image = styled.img`
  width: 3.5rem;
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

const Blockquote = styled.blockquote`
  color: var(--font-clr);
  font-size: clamp(1.5rem, 1.3421rem + 0.7018vw, 2rem);
  margin-block: 2.5rem;
  position: relative;
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgba(225, 185, 250, 0.65);

  &:before,
  &:after {
    content: "❝";
    color: var(--font-clr);
    font-size: 3em;
    position: absolute;
  }

  &:before {
    left: 0;
    top: 0;
    transform: translateY(-70%);
  }
  &:after {
    right: 0;
    bottom: 0;
    transform: translateY(70%);
  }

  @media screen and (min-width: 900px) {
    margin-block: 3rem;
  }
`;

const AboutMe = () => {
  const { inView, ref: myRef } = useInView();

  return (
    <AbouteMeStyled id="about-me" ref={myRef}>
      <Column inView={true}>
        {inView && <AnimatedText text={"About me"} aria-label="Projects" />}
        <SectionTitle>About me</SectionTitle>
      </Column>
      <Column inView={inView}>
        <Wrapper>
          <Blockquote>
            Self-taught quick learner looking forward to further develop new
            skills and gain more valuable experience as developer.
          </Blockquote>

          <Heading2>Introduction</Heading2>
          <Paragraph>
            After 5 years of experience in the field of Civil Engineering, where
            I was involved in design of various constructions, created detailed
            3D BIM models, prepared documentation and drawings i realised that
            it just might not be it.
          </Paragraph>

          <Paragraph>
            Since I was always drawn towards new technologies and tech
            innovations I decided to give it a try and took Harvard's CS50
            course. And just like that I found something that brings me joy,
            motivation and fun. After a few more courses, lots of tutorials and
            first commercial experience I am sure that I made the best decision
            possible.
          </Paragraph>

          <Paragraph>
            As a developer my primary focus is on JavaScript and Python.
          </Paragraph>

          <Heading2>Educational background</Heading2>
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
            aria-label="See certificate on Harvard's page"
          >
            <Image src={harvard} alt="Harvard's logo" />
            <Paragraph>CS50's Introduction to Computer Science</Paragraph>
          </LinkWrapper>

          <LinkWrapper
            href="https://certificates.cs50.io/c83d4b4b-b5a1-45d4-bd54-7724ddd6c816.pdf?size=letter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See certificate on Harvard's page"
          >
            <Image src={harvard} alt="Harvard's logo" />
            <Paragraph>
              CS50's Web Programming with Python and JavaScript
            </Paragraph>
          </LinkWrapper>

          <Heading2>Technology stack</Heading2>
          <Paragraph>
            HTML, CSS, JavaScript, TypeScript, Python, C (basics),
          </Paragraph>
          <Paragraph> SQLite, PostgreSQL, MongoDB,</Paragraph>
          <Paragraph>React, Next.js, Django, Flask,</Paragraph>
          <Paragraph>Sass, Styled Components, React Router,</Paragraph>
          <Paragraph>Git, Github</Paragraph>
          <Paragraph>Methodologies: Agile-Scrum</Paragraph>
        </Wrapper>
      </Column>
    </AbouteMeStyled>
  );
};

export default AboutMe;
