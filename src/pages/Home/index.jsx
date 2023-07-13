import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Sections from "../../components/sections";
import jog2 from "../../_img/jog2.jpg";
import styled from "styled-components";
const Home = () => {
  return (
    <Layout>
      <Header />
      <Sections>
        <Imagem src={jog2} alt="" />
        <Text>MINHA FRASE</Text>
      </Sections>
    </Layout>
  );
};

export default Home;

const Imagem = styled.img`
  width: auto;
  border: solid #2c2c2c 5px;
  margin-top: 3rem;
  @media (max-width: 999px) {
    box-shadow: 9px 7px 5px #bd00bd;
    border: none;
  }
  @media (max-width: 540px) {
    width: 80%;
    border-radius: 5%;
  }
`;
const Text = styled.article`
  margin-top: 3rem;
  margin-left: 2rem;
`;
