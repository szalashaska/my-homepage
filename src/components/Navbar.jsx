import styled from "styled-components";
import { LinkStyled } from "../GlobalStyles";

const navbarContent = [
  { id: 1, title: "About me", link: "#about-me" },
  { id: 2, title: "Projects", link: "#projects" },
  { id: 3, title: "Contacts", link: "#contacts" },
];

const NavbarStyled = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
`;

const List = styled.ul`
  width: 100%;
  padding: 1rem;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 850px) {
    justify-content: flex-end;
  }
`;

const Item = styled.li`
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 1.5px;
    width: 0;
    bottom: -50%;
    background-color: white;
    transition: width 0.4s ease-out;
  }
  &:hover::after,
  &:focus-within::after {
    width: 100%;
  }
`;

const Link = styled(LinkStyled)`
  padding: 1rem 1.5rem;
  font-weight: 700;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  transition: text-shadow 0.3s ease-in;
  &:hover,
  &:focus {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
  }
`;

const Navbar = () => {
  return (
    <NavbarStyled>
      <List>
        {navbarContent.map((item) => (
          <Item key={item.id}>
            <Link href={item.link}>{item.title} </Link>
          </Item>
        ))}
      </List>
    </NavbarStyled>
  );
};

export default Navbar;
