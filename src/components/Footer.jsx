import styled from "styled-components";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { LinkStyled, Paragraph, Wrapper } from "../GlobalStyles";

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
  font-size: clamp(0.8rem, 0.6737rem + 0.5614vw, 1.2rem);
  font-weight: 300;
`;

const FooterStyled = styled.footer`
  padding-top: 2.5rem;
`;

const FooterWrapper = styled.div`
  padding-block: 3rem;
  color: var(--font-clr);

  --skew-angle: -3deg;
  --background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);

  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: "";
    background: var(--background);
    position: absolute;
    z-index: -1;
    inset: 0;
    transform: skewY(var(--skew-angle));
  }

  &::before {
    content: "";
    background: linear-gradient(to right, #00f260, #0575e6);
    position: absolute;
    z-index: -2;
    inset: 0;
    transform: skewY(calc(var(--skew-angle) * -1));
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <FooterWrapper>
        <Paragraph align="center">Website made by Kamil Petryniak</Paragraph>
        <Wrapper>
          <SocialLink
            href="https://github.com/szalashaska"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See my github account."
          >
            <Icon as={GithubIco} />
            Github account
          </SocialLink>

          <SocialLink
            href="https://www.linkedin.com/in/kamil-petryniak/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See my linkedin account."
          >
            <Icon as={LinkedinIco} />
            Linkedin account
          </SocialLink>
        </Wrapper>
        <Paragraph align="center">Copyright © 2023</Paragraph>
      </FooterWrapper>
    </FooterStyled>
  );
};

export default Footer;

// const FooterStyled = styled.footer`
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
