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
  @media (max-width: 999px) {
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
