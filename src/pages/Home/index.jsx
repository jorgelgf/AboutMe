import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Sections from "../../components/sections";
import jog from "../../_img/jog.jpg";
const Home = () => {
  const SX = {
    backgroundImage: `url(${jog})`,
  };
  return (
    <Layout>
      <Header />
      <Sections style={SX}></Sections>
    </Layout>
  );
};

export default Home;
