import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: auto;
  flex-direction: column;
  display: flex;
  justify-content: start;

  animation: animeY 0.5s forwards;
  transform: translateY(-3px);
  @keyframes animeY {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export const Imagem = styled.img`
  width: 25vw;
  box-shadow: 6px 5px 1px #bd00bd;
  margin-top: 2vh;
  margin-bottom: 0;

  @media (max-width: 999px) {
    width: 36%;
    border: none;
    margin-top: 1vh;
  }
  @media (max-width: 540px) {
    width: 46vw;
    margin-top: 0;
  }
`;

export const Text = styled.article`
  //border: 1px solid black;
  width: 600px;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  margin-top: 1rem;
  width: 100%;

  //texto com animação de digitação
  div {
    @media(min-width:980px){
      font-size: 35px;
    }
    @media(min-height:1946px){
      font-size: 45px;
      padding:1rem
    }


    div {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin: 0 auto;
      display: inline-block;
      font-weight: normal;
    }
    div:after {
      content: "";
      display: inline-block;
      background-color: #bd00bd;
      margin-left: 2px;
      height: 25px;
      width: 4px;
      animation: cursor 0.8s infinite;
    }
    @keyframes cursor {
      0% {
        opacity: 1;
      }
      49% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
  }
  @media (max-width: 999px) {
    align-items: center;
    margin: 50px 0 0 0;
    padding: 0;s
    min-width: 100%;
  }
  @media (max-width: 300px) {
    margin: 6vh 0 0 0;
    padding: 0;
    width: 100%;
    font-size: 10px;
  }
`;
