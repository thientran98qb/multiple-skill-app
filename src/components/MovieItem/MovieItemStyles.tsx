import styled from "styled-components";

interface MovieItemProps {
  readonly imageCover: string;
}
export const MovieItemContainer = styled.div<MovieItemProps>`
  .movie-item-img {
    background-image: url(${({imageCover}) => (imageCover ? imageCover : "")});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 160%;
    border-radius: 10px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      font-size: 50px;
      transition: transform 0.3s ease;
      color: red;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
      svg {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  p {
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: 600;
  }
`
