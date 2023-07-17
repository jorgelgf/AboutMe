import React from "react";
import * as S from "./styles";
import HeaderBack from "../../components/Header/HeaderBack";
import Carousel from "../../components/carousel";
import Footer from "../../components/footer/indes";
const Projects = () => {
  return (
    <>
      <HeaderBack />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          fontSize: "25px",
        }}
      >
        Meus projetos
      </div>
      <S.Container>
        <Carousel />
      </S.Container>
      <Footer />
    </>
  );
};
export default Projects;
