import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Sections from "../../components/sections";
import jog2 from "../../_img/jog2.jpg";
import styled from "styled-components";
import Footer from "../../components/footer/indes";
const Home = () => {
  return (
    <Layout>
      <Header />
      <Sections>
        <Imagem src={jog2} alt="" />
        <Text2>
          <h1>DESENVOLVEDOR WEB</h1>
          "Buscando unir pessoas e negócios através das tecnologias"
        </Text2>
      </Sections>
      <Footer />
    </Layout>
  );
};

export default Home;

const Imagem = styled.img`
  width: auto;
  box-shadow: 6px 5px 1px #bd00bd;
  margin-top: 5rem;

  @media (max-width: 999px) {
    border: none;
    margin-top: 4rem;
  }
  @media (max-width: 540px) {
    width: 80%;
    margin-top: 0;
  }
`;

const Text2 = styled.article`
  //border: 1px solid black;
  width: auto;
  max-height: 30vh;
  margin-top: 10rem;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 999px) {
    align-items: center;
    margin: 6vh 0 0 0;
    padding: 0;
    max-width: 60%;
  }
`;
