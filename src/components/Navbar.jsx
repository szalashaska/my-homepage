import { useEffect, useRef } from "react";
import styled from "styled-components";
import { LinkStyled } from "../GlobalStyles";
import myself from "../assets/myself.jpg";

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
      var(--bg-clr) 25% 75%,
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
        var(--bg-clr) 0% 30%,
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
        45deg,
        var(--bg-clr) 0% 40%,
        rgba(255, 92, 51, 0.45),
        rgba(255, 102, 179, 0.5),
        rgba(179, 255, 255, 0.8),
        rgba(128, 255, 128, 0.8),
        rgba(255, 255, 51, 0.8)
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
    background-color: var(--font-clr);
    transition: width 0.4s ease-out;
  }
  &:hover::after,
  &:focus::after {
    width: 100%;
  }
`;

const Link = styled(LinkStyled)`
  display: block;
  padding: 1rem;
  font-weight: 700;
  text-shadow: 0 0 10px var(--bg-clr);
  @media screen and (min-width: 600px) {
    padding: 1rem 1.5rem;
  }
`;

const ImageItem = styled.li`
  width: 0;
  overflow: hidden;
  transition: all 0.5s ease-out;
  transform: scale(0);
  &.scrolled {
    transform: scale(1);
    width: auto;
    padding-right: 1rem;
  }
  @media screen and (min-width: 600px) {
    &.scrolled {
      padding: 1rem 1.5rem;
    }
  }
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  height: 2rem;
  transition: all 0.5s ease-out;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0 25px rgba(225, 185, 250, 0.65);
  }
`;

const Navbar = () => {
  const navbarRef = useRef(null);
  const imageRef = useRef(null);

  const handleScroll = () => {
    navbarRef.current.classList.toggle("scrolled", window.scrollY > 0);
    imageRef.current.classList.toggle("scrolled", window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarStyled>
      <List ref={navbarRef}>
        <ImageItem ref={imageRef} onClick={() => window.scrollTo(0, 0)}>
          <Image src={myself} />
        </ImageItem>
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
