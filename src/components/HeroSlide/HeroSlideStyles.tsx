import { Box } from "@mui/material";
import styled from "styled-components";
import { Container } from "../../globalStyles";

interface HeroSlideProps {
  readonly image: string;
}
export const HeroContainer = styled(Box)<HeroSlideProps>`
  background-image: url(${({ image }) => (image ? image : "")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 9rem 0;
  position: relative;
  &.active {
    .title,
    .overview,
    .btns {
      opacity: 1;
      transform: translateY(0);
    }
    .title {
      transition-delay: 0.3s, 0.3s;
    }
    .overview {
      transition-delay: 0.6s, 0.6s;
    }
    .btns {
      transition-delay: 0.9s, 0.9s;
    }
    img {
      transform: scale(1);
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`;

export const SlideItem = styled(Container)`
  &.slide-item {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
  }
  ${Container}
`;

export const LeftItem = styled(Box)`
  padding: 0 3rem;
  width: 55%;
  @media screen and (max-width: 1023px) {
    width: 100%;
    padding: 0;
  }
`;
export const RightItem = styled(Box)`
  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    transform: scale(0);
    transition: transform 0.7s ease;
    width: 400px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
export const TitleItem = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(-100px);
  transition: transform 0.5s ease, opacity 0.5s ease;
  @media screen and (max-width: 1023px) {
    font-size: 2.5rem;
  }
`;
export const OverviewItem = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(-100px);
  transition: transform 0.5s ease, opacity 0.5s ease;
  @media screen and (max-width: 1023px) {
    font-size: 0.7rem;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 4rem;
  opacity: 0;
  transform: translateY(-100px);
  transition: transform 0.5s ease, opacity 0.5s ease;
  & > * + * {
    margin-left: 2rem;
  }
  @media screen and (max-width: 600px) {
    & > * + * {
      margin-left: 0.5rem;
    }
  }
`;
