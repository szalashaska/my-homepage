import { useEffect, useRef } from "react";
import styled from "styled-components";
import { LinkStyled } from "../GlobalStyles";

const navbarContent = [
  { id: 1, title: "About me", link: "#about-me" },
  { id: 2, title: "Projects", link: "#projects" },
  { id: 3, title: "Contacts", link: "#contacts" },
];

const NavbarStyled = styled.nav`
  background: transparent;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  transition: all 1s ease-out;
`;

const List = styled.ul`
  position: relative;
  width: 100%;
  padding: 1rem;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Gradient for scroll on smaller devices*/
  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 51, 0.2),
      rgba(204, 204, 255, 0.3),
      rgba(255, 92, 51, 0.3),
      black,
      black,
      black,
      black,
      black,
      black,
      rgba(255, 92, 51, 0.3),
      rgba(204, 204, 255, 0.3),
      rgba(255, 255, 51, 0.2)
    );
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }

  &.scrolled::after {
    opacity: 1;
  }

  @media screen and (min-width: 850px) {
    justify-content: flex-end;

    /* Gradient for scroll */
    &::after {
      background: linear-gradient(
        -45deg,
        black,
        black,
        black,
        black,
        rgba(255, 92, 51, 0.3),
        rgba(255, 102, 179, 0.3),
        rgba(204, 204, 255, 0.3),
        rgba(179, 255, 255, 0.3),
        rgba(128, 255, 128, 0.2),
        rgba(255, 255, 51, 0.2)
      );
    }

    /* Gradient for hover */
    &::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        -45deg,
        black,
        black,
        black,
        rgba(255, 92, 51, 0.6),
        rgba(255, 102, 179, 0.6),
        rgba(204, 204, 255, 0.6),
        rgba(179, 255, 255, 0.6),
        rgba(128, 255, 128, 0.2),
        rgba(255, 255, 51, 0.2)
      );
      z-index: -1;
      transition: opacity 0.5s linear;
      opacity: 0;
    }

    &:hover::before {
      opacity: 1;
    }

    &.scrolled:hover::after {
      opacity: 0;
    }
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
`;

const Navbar = () => {
  const navbarRef = useRef(null);

  const handleScroll = () => {
    navbarRef.current.classList.toggle("scrolled", window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarStyled>
      <List ref={navbarRef}>
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
