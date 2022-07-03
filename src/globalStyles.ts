import styled, { createGlobalStyle } from "styled-components";

interface ButtonProps {
  readonly outline?: boolean;
  readonly small?: boolean;
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
  padding: ${({ small }) => (small ? "0.3rem 1.5rem" : "0.5rem 1.8rem")};
  border-width: ${({ small }) => (small ? "2px" : "4px")};
  border: solid ${({ outline }) => (outline ? "#fff" : "transparent")};
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

export const HeadTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  p {
    font-size: 1.5rem;
    letter-spacing: 1px;
    line-height: 1.5;
    font-weight: bold;
  }
`

export const Section = styled.div`
  padding: 1rem 2rem;
`
export default GlobalStyles;
