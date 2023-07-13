import React from "react";
import * as S from "./styles";
const Sections = ({ children, SX }) => {
  return <S.Container style={SX}>{children}</S.Container>;
};

export default Sections;
