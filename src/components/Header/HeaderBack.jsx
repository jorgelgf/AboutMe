import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

import { MdOutlineKeyboardReturn } from "react-icons/md";
const HeaderBack = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderB onClick={() => navigate("/")}>
      <MdOutlineKeyboardReturn /> <span>Back</span>
    </S.HeaderB>
  );
};

export default HeaderBack;
