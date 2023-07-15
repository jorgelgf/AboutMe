import React from "react";
import Header from "../../components/Header";
import Sections from "../../components/sections";
import jog2 from "../../_img/jog2.jpg";
import Footer from "../../components/footer/indes";
import WriteOnScreen from "../../components/writeOnScren";
import * as S from "./styles";
const Home = () => {
  return (
    <>
      <S.Container>
        <Header />

        <Sections>
          <S.Imagem src={jog2} alt="" />
        </Sections>
        <Sections>
          <S.Text>
            <div>
              <div>
                <WriteOnScreen
                  text="Minha missão 
é unir negócios e divessoas através das tecnologias"
                />
              </div>
            </div>
          </S.Text>
        </Sections>
        <Footer />
      </S.Container>
    </>
  );
};

export default Home;
