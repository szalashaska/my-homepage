import styled from "styled-components";
import { Column, Section, SectionTitle } from "../GlobalStyles";

import useInView from "../hooks/useInView";
import AnimatedText from "./AnimatedText";
import ContactsCard from "./ContactsCard";

const ContactsStyled = styled(Section)``;

const Contacts = () => {
  const { inView, ref: myRef } = useInView();

  return (
    <ContactsStyled id="contacts" ref={myRef}>
      <Column inView={true}>
        {inView && <AnimatedText text={"Contacts"} aria-label="Contacts" />}
        <SectionTitle>Contacts</SectionTitle>
      </Column>
      <Column inView={inView}>
        <ContactsCard parentContainer={myRef.current} />
      </Column>
    </ContactsStyled>
  );
};

export default Contacts;
