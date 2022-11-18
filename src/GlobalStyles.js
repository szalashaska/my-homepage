import styled, { createGlobalStyle } from "styled-components";
// import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* Variables */
:root {
  
  --ff-body: 'Exo 2', sans-serif;
  --max-vw: 93.75rem;
  --min-vw: 22.5rem;

  /* Theme values */
  --font-clr: white;
  --bg-clr: black;

  /* --font-clr: black;
  --bg-clr: white; */
}
/* Reset settings */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

img {
  display: block;
  max-width: 100%;
}

body {
    font-family: var(--ff-body)
}

/* class responsible for bright theme */
.bright {
  --font-clr: black;
  --bg-clr: white;
}
`;

export default GlobalStyles;

export const Heading1 = styled.h1`
  margin-bottom: ${({ mb }) => mb || "0.4em"};
  text-align: ${({ align }) => align || "left"};
  color: var(--font-clr);
  font-weight: ${({ bold }) => (bold ? 900 : 600)};
  font-size: clamp(2rem, 1.6842rem + 1.4035vw, 3rem);
  letter-spacing: -2px;
`;
export const Heading2 = styled.h2`
  margin-bottom: ${({ mb }) => mb || "0.4em"};
  text-align: ${({ align }) => align || "left"};
  font-weight: ${({ bold }) => (bold ? 800 : 600)};
  color: var(--font-clr);
  font-size: clamp(1.5rem, 1.3421rem + 0.7018vw, 2rem);
  letter-spacing: -1.8px;
`;

export const Heading3 = styled.h3`
  margin-bottom: ${({ mb }) => mb || "0.4em"};
  text-align: ${({ align }) => align || "left"};
  font-weight: ${({ bold }) => (bold ? 900 : 500)};
  font-size: clamp(1.2rem, 1.1053rem + 0.4211vw, 1.5rem);
`;

export const Paragraph = styled.p`
  margin-bottom: ${({ mb }) => mb || "0.6em"};
  font-weight: ${({ bold }) => (bold ? 700 : 300)};
  text-align: ${({ align }) => align || "left"};
  color: var(--font-clr);
  font-size: clamp(0.8rem, 0.6737rem + 0.5614vw, 1.2rem);
  letter-spacing: 0px;
`;

export const LinkStyled = styled.a`
  color: var(--font-clr);
  text-decoration: none;
  font-size: clamp(0.8rem, 0.6737rem + 0.5614vw, 1.2rem);
  transition: all 0.3s ease-in;
`;

export const Section = styled.section`
  padding-block: 2rem;
  margin-inline: auto;
  max-width: var(--max-vw);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;
export const Column = styled.div`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  filter: blur(${(props) => (props.inView ? 0 : "5px")});
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 12rem;
  transition: all 1s;
  @media screen and (min-width: 900px) {
    width: 50%;
  }
  &:nth-child(odd) {
    transform: translateX(${(props) => (props.inView ? 0 : "-100%")});
  }
  &:nth-child(even) {
    transform: translateX(${(props) => (props.inView ? 0 : "100%")});
  }
`;

export const Wrapper = styled.div``;
