import styled from "styled-components";
import { Heading2, LinkStyled, Paragraph } from "../GlobalStyles";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";

const Icon = styled.svg`
  fill: var(--font-clr);
  margin-left: 1rem;
  transition: all 0.3s ease-in;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

const GithubIco = styled(Github)``;

const ArrowIco = styled(Arrow)`
  height: 24px;
`;

const CardStyled = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  display: block;
  box-shadow: 0 0 20px #867272;

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

const TextWrapper = styled.div`
  background: linear-gradient(45deg, #312828, var(--bg-clr) 15% 85%, #380923);
  padding: 0.5rem 1.5rem 5em 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover a {
    transform: scale(1.05);
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
`;

const Image = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const Heading = styled(Heading2)`
  margin-block: 1rem;
  @media screen and (min-width: 450px) {
    min-height: 2.4em;
  }
`;

const LinkContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Link = styled(LinkStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 0.25rem;
  &:hover {
    color: #f13a3a;
    letter-spacing: 0.25px;
  }
  &:hover svg {
    fill: #f13a3a;
  }
`;

const Card = ({ img, heading, text, link, github }) => {
  return (
    <CardStyled>
      <Image src={img} alt="Project picture" />
      <TextWrapper>
        <Heading>{heading}</Heading>
        <Paragraph>{text}</Paragraph>
        <LinkContainer>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See live deployed application"
          >
            <>Check out live</>
            <Icon as={ArrowIco} />
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See project's code on github"
          >
            See on github
            <Icon as={GithubIco} />
          </Link>
        </LinkContainer>
      </TextWrapper>
    </CardStyled>
  );
};

export default Card;
