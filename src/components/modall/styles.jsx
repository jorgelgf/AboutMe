import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 7vh;
  z-index: 3;
  left: 3vw;
  background-color: white;
  width: 82vw;
  height: 40vh;
  color: black;
  box-shadow: 4px 4px 1px #5f5d5d;
  transition: all 0.2s;

  section {
    //border: solid black 1px;
    letter-spacing: 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    div {
      cursor: pointer;
      font-size: 2vh;
      width: 100%;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      :hover {
        background-color: #5f5d5d;
        color: white;
      }
    }
  }

  @media (min-width: 960px) {
    top: 6vh;
    width: 86vw;
    left: 7vw;
  }
  @media (min-height: 600px) {
    top: 10vh;
    width: 86vw;
    left: 7vw;
  }
  @media (max-width: 912px) {
    top: 5vh;

    width: 86vw;
    left: 7vw;
  }
  @media (max-width: 820px) {
    top: 6vh;

    width: 86vw;
    left: 7vw;
  }
  @media (max-width: 540px) {
    top: 10vh;
    width: 86vw;
    left: 7vw;
  }
  @media (max-width: 500px) {
    top: 10vh;
    width: 86vw;
    left: 7vw;
  }
  @media (max-width: 425px) {
    top: 7vh;
    width: 86vw;
    left: 7vw;
  }

  animation: animeY 0.4s forwards;
  transform: translateY(-6px);
  @keyframes animeY {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
