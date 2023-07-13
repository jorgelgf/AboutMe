import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-around;
  @media (max-width: 999px) {
    flex-direction: column;
    margin: 0;
    justify-content: start;
    align-items: center;
  }
  //border: solid black 1px;
`;
