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
    background: linear-gradient(-45deg, red, blue);
    transform: translateZ(var(--depth-offset));
  }

  &::before {
    inset: 0.25rem;
    background: var(--bg-clr);
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

const ContactsCard = () => {
  const contactsRef = useRef();

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
    if (!contactsRef.current) return;

    const maxRotateDeg = 40;
    const x = e.pageX;
    const y = e.pageY;
    const offsetX = this.offsetLeft;
    const offsetY = this.offsetTop;
    const middleX = this.clientWidth / 2;
    const middleY = this.clientHeight / 2;

    const dx = ((x - offsetX - middleX) / middleX) * maxRotateDeg;
    const dy = ((y - offsetY - middleY) / middleY) * maxRotateDeg;

    contactsRef.current.style.setProperty("--rotateX", `${dy * -1}deg`);
    contactsRef.current.style.setProperty("--rotateY", `${dx}deg`);
  }

  function handleMouseLeave() {
    if (!contactsRef.current) return;
    contactsRef.current.style.setProperty("--rotateX", "0deg");
    contactsRef.current.style.setProperty("--rotateY", "0deg");
  }

  useEffect(() => {
    let parentNode;
    if (contactsRef.current) {
      parentNode = contactsRef.current.parentNode.parentNode;
      parentNode.addEventListener("mousemove", handleMouseMove);
      parentNode.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (parentNode) {
        parentNode.removeEventListener("mousemove", handleMouseMove);
        parentNode.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <Contacts ref={contactsRef}>
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
