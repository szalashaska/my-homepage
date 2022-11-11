import styled from "styled-components";

const AbouteMeStyled = styled.section`
  height: 100vh;
`;
const AboutMe = () => {
  return (
    <AbouteMeStyled>
      <h2>
        Self-taught quick learner, happily looking forward to further develop
        new skills and gain more valuable experience as developer.
      </h2>
      <h3>Frontend developer with primary focus on JavaScrip and Python</h3>
      <h3>
        TECHNOLOGY STACK HTML, CSS, JavaScript, TypeScript, Python, C (basics),
        SQLite, PostgreSQL; React, Django, Flask; Styled Components
      </h3>

      <h3>
        CS50's Web Programming with Python and JavaScript by Harvard University
        CS50's Introduction to Computer Science by Harvard University
      </h3>
    </AbouteMeStyled>
  );
};

export default AboutMe;
