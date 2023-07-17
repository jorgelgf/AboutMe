import styled from "styled-components";

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  p {
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
  }

  @media (min-height: 1946px) {
    font-size: 45px;
    padding: 2rem;
  }
`;
