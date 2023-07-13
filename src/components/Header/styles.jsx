import styled from "styled-components";

export const Container = styled.header`
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    .jorge {
      display: none;
      @media (max-width: 999px) {
        display: flex;
      }
    }

    a {
      text-decoration: none;
      color: black;
      cursor: pointer;

      :hover {
        color: #355cd8;
        transition: all 0.4s;
      }
    }
  }
`;
export const MobileMenu = styled.div`
  cursor: pointer;
  display: none;
  div {
    width: 32px;
    height: 2px;
    margin: 8px;
    background-color: #6e6e6e;
  }

  @media (max-width: 999px) {
    display: block;
  }
`;
export const Logo = styled.div`
  color: white;
  background-color: black;
  font-weight: 600;
  padding: 1rem;
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
  :hover {
    color: #355cd8;
  }
`;