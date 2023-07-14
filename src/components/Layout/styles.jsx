import styled from "styled-components";

export const Container = styled.div`
  min-width: 90%;
  height: 100%;

  animation: animeLeft 0.4s forwards;
  transform: translateY(-20px);
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
