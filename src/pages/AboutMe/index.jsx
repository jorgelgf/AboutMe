import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <div onClick={() => navigate("/")}>Back</div>
    </S.Container>
  );
};

export default AboutMe;
