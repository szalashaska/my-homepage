import styled, { createGlobalStyle } from "styled-components";
// import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* Variables */
:root {
  
  --ff-body:  'Exo 2', sans-serif;
  --max-vw: 93.75rem;
  --min-vw: 22.5rem;
}
/* Reset settings */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
}
body {
    font-family: var(--ff-body)
}
`;

export default GlobalStyles;

export const Heading1 = styled.h1`
  margin-bottom: ${({ mb }) => mb || "0.4em"};
  text-align: ${({ align }) => align || "left"};
  /* color: ${({ light }) => (light ? "white" : "black")}; */
  color: white;
  font-weight: ${({ bold }) => (bold ? 900 : 600)};
  font-size: clamp(2rem, 1.6842rem + 1.4035vw, 3rem);
  letter-spacing: -2px;
`;
export const Heading2 = styled.h2`
  margin-bottom: ${({ mb }) => mb || "0.4em"};
  text-align: ${({ align }) => align || "left"};
  font-weight: ${({ bold }) => (bold ? 800 : 600)};
  /* color: ${({ light }) => (light ? "white" : "black")}; */
  color: white;
  font-size: clamp(1.5rem, 1.3421rem + 0.7018vw, 2rem);
  letter-spacing: -1.8px;
`;

export const Paragraph = styled.p`
  font-weight: ${({ bold }) => (bold ? 700 : 300)};
  text-align: ${({ align }) => align || "left"};
  /* color: ${({ light }) => (light ? "white" : "black")}; */
  color: white;
  font-size: clamp(0.8rem, 0.6737rem + 0.5614vw, 1.2rem);
  letter-spacing: 0px;
  margin-bottom: ${({ mb }) => mb || "0.4em"};
`;
