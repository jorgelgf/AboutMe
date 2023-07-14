import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top:7vh;
  z-index: 3;
  left: 3vw;
  background-color: #ffffff;
  width: 82vw;
  height: 86vh;
  color: white;
  box-shadow: 9px 10px 1px #bd00bd;
  transition: all 0.2s;
  @media (max-width: 999px) {
    margin:0
    top:7vh;

    width: 86vw;
    left: 7vw;
  }

  animation: animeLeft 0.4s forwards;
  transform: translateX(-6px);
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
