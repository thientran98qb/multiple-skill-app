import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

interface NavBarProps {
  readonly show: boolean;
}

export const Nav = styled.nav`
  background: transparent;
  height: 8rem;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  transition: height 0.3s ease, background-color 0.3s ease-in;
  &.shink {
    height: 5rem;
    background-color: #000;
  }
  @media screen and (max-width: 960px) {
    height: 5rem;
  }
`;
export const NavbarContainer = styled(Container)`
  &.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 2rem;
  }
  ${Container}
`;
export const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0 10px;
  font-size: 2rem;
  font-weight: 600;
`;
export const NavIcon = styled.img`
  width: 50px;
  height: 50px;
  max-width: 100%;
`;
export const NavMenu = styled.ul<NavBarProps>`
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    margin-top: 0;
    padding-left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    background-color: #071c2f;
  }

  & > * ~ * {
    @media screen and (max-width: 960px) {
      margin-left: 0;
    }
    margin-left: 2rem;
  }
`;
export const NavItem = styled.li`
  list-style: none;
  cursor: pointer;
  position: relative;
  &::before {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    width: 0;
    background-color: red;
    content: "";
    transition: width 0.3s ease;
  }
  &.active,
  &:hover {
    &::before {
      width: 100%;
    }
  }
  &.active {
    color: #ff0000;
  }
  @media screen and (max-width: 960px) {
    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled(Link)`
  text-decoration: none;
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  transition: all 0.25s ease;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  z-index: 50;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
`;
