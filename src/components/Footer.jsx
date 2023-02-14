import styled from "styled-components";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { LinkStyled, Paragraph, Wrapper } from "../GlobalStyles";
import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";

const Icon = styled.svg`
  fill: var(--font-clr);
  transition: all 0.3s ease-in;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

const GithubIco = styled(Github)``;
const LinkedinIco = styled(Linkedin)``;

const SocialLink = styled(LinkStyled)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 500px) {
    margin-bottom: 0;
  }
`;

const FooterStyled = styled.footer`
  padding-block: 2.5rem;
  background: linear-gradient(to top, var(--bg-clr), #12c2e9, var(--bg-clr));
`;

const FooterWrapper = styled.div`
  padding-block: 3rem;
  color: var(--font-clr);
  --background-light: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
  --background-dark: linear-gradient(45deg, #0eabce, #6e3f86, #d4434d);

  --skew-angle: -3deg;
  --background1: ${(props) =>
    props.theme === "dark"
      ? "var(--background-dark)"
      : "var(--background-light)"};
  --background2: linear-gradient(to right, #00f260, #0575e6, #e84141, #f9f902);

  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: "";
    background: var(--background1);
    position: absolute;
    z-index: -1;
    inset: 0;
    transform: skewY(var(--skew-angle));
  }

  &::before {
    content: "";
    background: var(--background2) left/400% 100%;
    position: absolute;
    z-index: -2;
    inset: 0;
    transform: skewY(calc(var(--skew-angle) * -1));
    animation: background-change 8s infinite alternate linear;
    @keyframes background-change {
      100% {
        background-position: right;
      }
    }
  }
`;

const FooterText = styled(Paragraph)`
  text-align: center;
  font-weight: 500;
  text-shadow: 0 0 5px rgba(225, 185, 250, 0.725);
`;

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FooterStyled>
      <FooterWrapper theme={theme}>
        <FooterText>Website made by Kamil Petryniak</FooterText>
        <Wrapper>
          <SocialLink
            href="https://github.com/szalashaska"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See my github account."
          >
            <Icon as={GithubIco} />
            <FooterText>Github account</FooterText>
          </SocialLink>

          <SocialLink
            href="https://www.linkedin.com/in/kamil-petryniak/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See my linkedin account."
          >
            <Icon as={LinkedinIco} />
            <FooterText>Linkedin account</FooterText>
          </SocialLink>
        </Wrapper>
        <FooterText>Copyright © 2023</FooterText>
      </FooterWrapper>
    </FooterStyled>
  );
};

export default Footer;

// const FooterStyled = styled.footer`;
//   /* mask created with
//   https://css-generators.com/wavy-shapes/ */

//   padding-top: 7rem;
//   background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
//   /* --mask: radial-gradient(11.2rem at 50% 15rem, #000 99%, #0000 101%)
//       calc(50% - 10rem) 0/20rem 100%,
//     radial-gradient(11.2rem at 50% -10rem, #0000 99%, #000 101%) 50% 5rem/20rem
//       100% repeat-x;
//   -webkit-mask: var(--mask);
//   mask: var(--mask); */
// `;

// const FooterStyled = styled.footer`
//   background: linear-gradient(90deg, red, blue, green, yellow) left/400% 100%;
//   animation: f 10s infinite alternate linear;

//   @keyframes f {
//     100% {
//       background-position: right;
//     }
//   }
// `;

// const FooterWrapper = styled.div`
//   --s: 40px; /* shape size */
//   --m: 2px; /* line thickness */

//   --v1: var(--bg-clr) 119.5deg, #0000 120.5deg;
//   --v2: #000 119.5deg, #0000 120.5deg;
//   background: conic-gradient(
//       at var(--m) calc(var(--s) * 0.5777),
//       transparent 270deg,
//       #000 0deg
//     ),
//     conic-gradient(
//       at calc(100% - var(--m)) calc(var(--s) * 0.5777),
//       #000 90deg,
//       transparent 0deg
//     ),
//     conic-gradient(from -60deg at 50% calc(var(--s) * 0.8662), var(--v1)),
//     conic-gradient(
//       from -60deg at 50% calc(var(--s) * 0.8662 + 2 * var(--m)),
//       var(--v2)
//     ),
//     conic-gradient(
//       from 120deg at 50% calc(var(--s) * 1.4435 + 3 * var(--m)),
//       var(--v1)
//     ),
//     conic-gradient(
//       from 120deg at 50% calc(var(--s) * 1.4435 + var(--m)),
//       var(--v2)
//     ),
//     linear-gradient(
//       90deg,
//       var(--bg-clr) calc(50% - var(--m)),
//       #000 0 calc(50% + var(--m)),
//       var(--bg-clr) 0
//     );
//   background-size: calc(var(--s) + 2 * var(--m))
//     calc(var(--s) * 1.732 + 3 * var(--m));
//   mix-blend-mode: lighten;
//   padding-block: 3rem;
//   color: var(--font-clr);

//   gap: 0.5rem;
// `;
