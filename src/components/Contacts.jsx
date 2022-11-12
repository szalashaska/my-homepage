import styled from "styled-components";
import { Column, Heading1, LinkStyled, Section } from "../GlobalStyles";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Download } from "../assets/download.svg";

const ContactsStyled = styled(Section)``;

const GithubIco = styled(Github)`
  fill: white;
  margin: 1rem;
  transition: all 0.3s ease-in;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
const LinkedinIco = styled(Linkedin)`
  fill: white;
  margin: 1rem;
  transition: all 0.3s ease-in;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

const EmailIco = styled(Email)`
  fill: white;
  margin: 1rem;
  transition: all 0.3s ease-in;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

const DownloadIco = styled(Download)`
  fill: white;
  margin: 1rem;
  transition: all 0.3s ease-in;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

const Link = styled(LinkStyled)`
  position: relative;
  &:hover div {
    display: block;
  }
`;

const Button = styled.button`
  position: relative;
  font-family: var(--ff-body);
  background: none;
  border: none;
  cursor: pointer;
  &:hover div {
    display: block;
  }
`;

const Info = styled.div`
  text-decoration: none;
  font-size: clamp(0.8rem, 0.6737rem + 0.5614vw, 1.2rem);
  display: none;
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
  color: black;
  position: absolute;
  min-width: 18ch;
  top: 90%;
  right: 50%;
  transform: translateX(50%);
  background: white;
  box-shadow: 0 0 10px rgba(230, 202, 202, 0.8);
  &::before {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
`;

const Contacts = () => {
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

  return (
    <ContactsStyled id="contacts">
      <Column>
        <Heading1>Contacts</Heading1>
      </Column>
      <Column>
        <Link
          href="https://github.com/szalashaska"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIco />
          <Info>Github account</Info>
        </Link>

        <Link
          href="https://www.linkedin.com/in/kamil-petryniak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIco />
          <Info>Linkedin account</Info>
        </Link>

        <Link
          href="mailto: kamilpetryniak@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIco />
          <Info>Email me</Info>
        </Link>

        <Button type="button" onClick={handleButtonClick}>
          <DownloadIco />
          <Info>Download my CV</Info>
        </Button>
      </Column>
    </ContactsStyled>
  );
};

export default Contacts;
