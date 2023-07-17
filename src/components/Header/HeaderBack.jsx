import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const HeaderBack = () => {
  const navigate = useNavigate();
  return <S.HeaderB onClick={() => navigate("/")}>back</S.HeaderB>;
};

export default HeaderBack;
