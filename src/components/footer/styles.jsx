import styled from "styled-components";

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
  p {
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
  }

  @media (max-width: 765px) {
    position: relative;
  }
  @media (max-width: 750px) {
    position: absolute;
  }
`;
