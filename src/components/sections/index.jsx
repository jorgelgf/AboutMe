import React from "react";
import * as S from "./styles";
const Sections = ({ children, style }) => {
  return <S.Container style={style}>{children}</S.Container>;
};

export default Sections;
