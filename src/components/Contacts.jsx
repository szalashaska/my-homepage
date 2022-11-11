import styled from "styled-components";
import { Column, Heading1, Section } from "../GlobalStyles";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Email } from "../assets/email.svg";

const ContactsStyled = styled(Section)``;

const GithubIco = styled(Github)`
  fill: white;
  margin: 1rem;
`;
const LinkedinIco = styled(Linkedin)`
  fill: white;
  margin: 1rem;
`;

const EmailIco = styled(Email)`
  fill: white;
  margin: 1rem;
`;

const Contacts = () => {
  return (
    <ContactsStyled id="contacts">
      <Column>
        <Heading1>Contacts</Heading1>
      </Column>
      <Column>
        <GithubIco />
        <LinkedinIco />
        <EmailIco />
      </Column>
    </ContactsStyled>
  );
};

export default Contacts;
