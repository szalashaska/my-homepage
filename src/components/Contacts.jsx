import styled from "styled-components";
import { Column, Section } from "../GlobalStyles";

import useInView from "../hooks/useInView";
import AnimatedText from "./AnimatedText";
import ContactsCard from "./ContactsCard";
import TypedText from "./TypedText";

const ContactsStyled = styled(Section)``;

const Contacts = () => {
  const { inView, ref: myRef } = useInView();

  return (
    <ContactsStyled id="contacts" ref={myRef}>
      <Column inView={true}>
        {inView && <AnimatedText text={"Contacts"} aria-label="Contacts" />}
        <TypedText text={"Contacts."} inView={inView} />
      </Column>
      <Column inView={inView}>
        <ContactsCard parentContainer={myRef.current} />
      </Column>
    </ContactsStyled>
  );
};

export default Contacts;
