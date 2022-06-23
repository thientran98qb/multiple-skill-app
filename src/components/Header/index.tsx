import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/tmovie.png";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./HeaderStyles";
const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const refHeader = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const active = headerNav.findIndex((el) => el.path === pathname);
  const handleClickMenuMobile = () => {
    setShow(!show);
  };
  useEffect(() => {
    const scrollToggle = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        refHeader.current?.classList.add("shink");
      } else {
        refHeader.current?.classList.remove("shink");
      }
    };
    window.addEventListener("scroll", scrollToggle);

    return () => window.removeEventListener("scroll", scrollToggle);
  }, []);
  return (
    <Nav ref={refHeader}>
      <NavbarContainer className="wrapper">
        <NavLogo to="/">
          <NavIcon src={logo} alt="logo" />
          TMovies
        </NavLogo>
        <MobileIcon onClick={handleClickMenuMobile}>
          {show ? <CloseIcon /> : <MenuIcon />}
        </MobileIcon>
        <NavMenu show={show}>
          {headerNav.map((nav, i) => (
            <NavItem key={i} className={`${i === active ? "active" : ""}`}>
              <NavLinks to={nav.path}>{nav.display}</NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;
