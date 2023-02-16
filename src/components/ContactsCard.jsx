import styled from "styled-components";
import { LinkStyled } from "../GlobalStyles";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Download } from "../assets/download.svg";
import { useRef } from "react";
import { useEffect } from "react";

const Icon = styled.svg`
  fill: var(--font-clr);
  margin: 1rem;
  transition: all 0.3s ease-in;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

const GithubIco = styled(Github)``;
const LinkedinIco = styled(Linkedin)``;
const EmailIco = styled(Email)``;
const DownloadIco = styled(Download)``;

const Contacts = styled.div`
  --depth-offset: -50px;
  display: inline-block;
  background-color: var(--bg-clr);
  box-shadow: 0 0 8px #867272;
  border-radius: 15px;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(5000px) rotateY(var(--rotateY)) rotateX(var(--rotateX));

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }

  &::after {
    inset: -1rem;
    background: linear-gradient(-45deg, #0575e6, #e84141, #f9f902);
    transform: translateZ(var(--depth-offset));
  }

  &::before {
    inset: 0.25rem;
    background: black;
    transform: translateZ(calc(var(--depth-offset) + 1px));
    filter: blur(15px);
    opacity: 0.9;
  }
`;

const Link = styled(LinkStyled)`
  position: relative;
  transform: translateZ(100px);
`;

const Button = styled.button`
  position: relative;
  font-family: var(--ff-body);
  background: none;
  border: none;
  cursor: pointer;
`;

const Info = styled.div`
  min-width: 18ch;
  opacity: 0;
  text-decoration: none;
  font-size: clamp(0.8rem, 0.6737rem + 0.5614vw, 1.2rem);
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
  color: var(--bg-clr);
  position: absolute;
  top: 90%;
  right: 50%;
  transform: translateX(50%);
  background: var(--font-clr);
  box-shadow: 0 0 10px rgba(230, 202, 202, 0.8);
  transition: all 0.4s ease-in-out;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent var(--font-clr) transparent;
  }

  ${Link}:hover &,
  ${Button}:hover & {
    opacity: 1;
    z-index: 2;
  }
`;

const ContactsCard = ({ parentContainer }) => {
  const cardRef = useRef();

  const handleButtonClick = () => {
    fetch("Petryniak_Kamil_CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Petryniak_Kamil_CV.pdf";
        alink.click();
      });
    });
  };

  function handleMouseMove(e) {
    if (!cardRef.current) return;

    const maxRotateDeg = 40; // Max angle (in degrees) that container will rotate
    const x = e.pageX;
    const y = e.pageY;

    // parentOffsetY would be need if card was always in the middle of parent X axis
    // const parentOffsetX = this.offsetLeft;
    const parentOffsetY = this.offsetTop;
    let childOffsetX = cardRef.current.offsetLeft;

    const parentMiddleX = this.clientWidth / 2;
    const parentMiddleY = this.clientHeight / 2;
    const childMiddleX = cardRef.current.clientWidth / 2;

    // If card is deep nested we need to calculate relative offset x
    let parent = cardRef.current.parentNode;
    while (parent !== this) {
      childOffsetX += parent.offsetLeft;
      parent = parent.parentNode;
    }

    // For card always in the middle axix
    // ((x - parentOffsetX - parentMiddleX) / parentMiddleX) * maxRotateDeg;

    // Card is not always in the middle of container axis X
    const dx =
      ((x - childOffsetX - childMiddleX) / parentMiddleX) * maxRotateDeg;

    // Card is always in the middle of container axis Y
    const dy =
      ((y - parentOffsetY - parentMiddleY) / parentMiddleY) * maxRotateDeg;

    cardRef.current.style.setProperty("--rotateX", `${dy * -1}deg`);
    cardRef.current.style.setProperty("--rotateY", `${dx}deg`);
  }

  function handleMouseLeave() {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rotateX", "0deg");
    cardRef.current.style.setProperty("--rotateY", "0deg");
  }

  useEffect(() => {
    if (!parentContainer) return;

    parentContainer.addEventListener("mousemove", handleMouseMove);
    parentContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (parentContainer) {
        parentContainer.removeEventListener("mousemove", handleMouseMove);
        parentContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [parentContainer]);

  return (
    <Contacts ref={cardRef}>
      <Link
        href="https://github.com/szalashaska"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="See my github account."
      >
        <Icon as={GithubIco} />
        <Info>Github account</Info>
      </Link>

      <Link
        href="https://www.linkedin.com/in/kamil-petryniak/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="See my linkedin account."
      >
        <Icon as={LinkedinIco} />
        <Info>Linkedin account</Info>
      </Link>

      <Link
        href="mailto: kamilpetryniak@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Write email to me."
      >
        <Icon as={EmailIco} />
        <Info>Email me</Info>
      </Link>

      <Button
        type="button"
        onClick={handleButtonClick}
        title="Download my CV"
        aria-label="Download my CV."
      >
        <Icon as={DownloadIco} />
        <Info>Download my CV</Info>
      </Button>
    </Contacts>
  );
};

export default ContactsCard;
