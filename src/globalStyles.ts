import styled, { createGlobalStyle } from "styled-components";

interface ButtonProps {
  readonly outline?: boolean;
}
const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #0f0f0f !important;
        color: #fff !important;
    }
    a {
        color: unset;
        text-decoration: none;
    }
    @media (hover:hover) {
      a:hover {
        color: #ff0000;
      }
    }
`;
export const Container = styled.div`
  max-width: 1660px;
  margin: auto;
  @media screen and (max-width: 960px) {
    padding: 0 20px;
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ outline }) => (outline ? "transparent" : "#ff0000")};
  border-radius: 30px;
  color: #fff;
  box-shadow: ${({ outline }) =>
    outline ? "unset" : "0px 0px 7px 8px #ff00004d"};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1.8rem;
  border: 4px solid ${({ outline }) => (outline ? "#fff" : "transparent")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    ${({ outline }) =>
      outline
        ? ` box-shadow: unset;
    color: #ff0000;
    background-color: #fff;`
        : "box-shadow: 0px 0px 7px 15px #ff00004d;"};
  }
`;
export default GlobalStyles;
