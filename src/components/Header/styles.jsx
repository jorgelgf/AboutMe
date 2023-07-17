import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-size: 1.5vw;

    @media (min-width: 980px) {
      font-size: 25px;
    }
    //background-color: red;
    .jorge {
      letter-spacing: 3px;
      padding: 0.5rem 1rem;
      display: none;
      font-weight: 400;

      @media (max-width: 999px) {
        padding: 1rem;

        font-size: 3vw;
        display: flex;
        color: 1px 1.5px 1px #ff12ff;
        font-weight: 500;
        letter-spacing: 8px;
      }
      @media (max-height: 800px) {
        font-size: 100px;
        padding: 1rem;
      }
      @media (max-width: 400px) {
        font-size: 10px;
        padding: 1rem;
      }
    }

    a {
      text-decoration: none;
      color: black;
      cursor: pointer;

      :hover {
        color: #bd00bd;
        transition: all 0.4s;
      }
    }
  }
`;
export const MobileMenu = styled.div`
  z-index: 10;
  cursor: pointer;
  display: none;
  div {
    width: 52px;
    height: 3px;
    margin: 8px;
    background-color: #6e6e6e;
  }

  @media (max-width: 999px) {
    display: block;
  }
`;
export const Logo = styled.div`
  color: white;

  display: flex;
  .logo {
    font-weight: 600;
    padding: 1rem;
    margin: 0;
    background-color: black;
    transition: all 0.2s;
    :hover {
      background-color: #bd00bd;
      color: black;
    }
  }
  .name {
    padding: 1rem;
    background-color: white;
    color: black;
    letter-spacing: 15px;
    transition: all 0.2s;
    display: hidden;
    :hover {
      display: flex;
    }
  }

  @media (max-width: 999px) {
    display: none;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  li {
    letter-spacing: 3px;
    margin-left: 32px;
  }
  @media (max-width: 999px) {
    display: none;
  }
`;
export const Alink = styled.div`
  cursor: pointer;
  cursor: pointer;
  transition: all 0.4s;
  border-bottom: 1px solid transparent;
  :hover {
    color: #bd00bd;
    border-bottom: 1px solid #bd00bd;
  }
`;

//componente HeaderBack

export const HeaderB = styled.header`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0;
  padding: 1rem;
  font-size: 3vh;
  transition: all 0.4s;
  :hover {
    background-color: #bd00bd;
    color: white;
  }
`;
