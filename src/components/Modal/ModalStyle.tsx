import styled from "styled-components";

export const ModalContainer = styled.div`
  &.modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;

  }
  &.active {
    opacity: 1;
    visibility: visible;
    .modal__content {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const ModalContentContainer = styled.div`
  background-color: #1d2226;
  width: 50%;
  position: relative;
  transform: translateY(-150px);
  opacity: 0;
  transition: transform 0.3s ease;
  @media screen and (max-width: 960px) {
    width: 80%;
  }
  .close-icon {
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
`
