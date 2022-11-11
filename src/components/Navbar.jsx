const Navbar = () => {
  const navbarContent = [
    { id: 1, title: "About me" },
    { id: 2, title: "Projects" },
    { id: 3, title: "Contacts" },
  ];
  return (
    <nav>
      Navbar
      <Link to="#projects">Click</Link>
    </nav>
  );
};

export default Navbar;
