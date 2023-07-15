import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Modall = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container>
        <section>
          <div onClick={() => navigate("/works")}>trabalhos</div>
          <div onClick={() => navigate("/aboutMe")}>sobre mim</div>
          <div>contatos</div>
        </section>
      </S.Container>
    </>
  );
};

export default Modall;
