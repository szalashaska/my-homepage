import styled from "styled-components";
import { Heading2, LinkStyled, Paragraph } from "../GlobalStyles";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";
import { ReactComponent as Star } from "../assets/star.svg";

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

const StarIco = styled(Star)`
  margin-inline: 0;
  height: 18px;
  @media screen and (min-width: 450px) {
    height: 24px;
  }
`;

const CardStyled = styled.div`
  margin: 1rem;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px #867272;

  @media screen and (min-width: 1200px) {
    box-shadow: 0 0 20px #867272;
    margin: 2rem;
  }
`;

const TextWrapper = styled.div`
  background: linear-gradient(45deg, #312828, var(--bg-clr) 25% 75%, #380923);
  padding: 0.5rem 1.5rem 5em 1.5rem;
  width: 100%;
  flex-grow: 1;
  position: relative;
  white-space: normal;
  &:hover a {
    transform: scale(1.05);
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
`;

const StarsWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
  @media screen and (min-width: 450px) {
    margin-top: 0rem;
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const Heading = styled(Heading2)`
  margin-top: 1rem;
  margin-bottom: 0;
  @media screen and (min-width: 450px) {
    min-height: 2.4em;
  }
`;

const Description = styled(Paragraph)`
  min-height: 10em;
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

const Card = ({ cardData }) => {
  const { img, heading, text, link, github, rank } = cardData;

  return (
    <CardStyled>
      <Image src={img} alt="Project picture" />
      <TextWrapper>
        <Heading>{heading}</Heading>
        <StarsWrapper>
          {[...Array(rank)].map((item, index) => (
            <Icon as={StarIco} key={`${item}-${index}`} />
          ))}
        </StarsWrapper>
        <Description>{text}</Description>
        <LinkContainer>
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="See live deployed application."
            >
              <>Check out live</>
              <Icon as={ArrowIco} />
            </Link>
          )}
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See project's code on github."
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
