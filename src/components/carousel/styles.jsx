import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  .carousel {
    cursor: grab;
    overflow: hidden;
    .inner {
      display: flex;

      min-width: 300px;
      min-height: 400px;
      .item {
        padding: 14px;
        img {
          width: 300px;
          height: 400px;
          border-radius: 5px;
          pointer-events: none;
        }
      }
    }
  }
`;

//para component links
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.4s;
    :hover {
      box-shadow: 6px 5px 1px #bd00bd;
      background-color: black;
      color: white;
    }

    a {
      border: solid white 1px;
      padding: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: black;
      :hover {
        color: white;
      }
    }
  }
`;
