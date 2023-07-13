import React, { useState } from "react";
import * as S from "./styles";
import Modall from "../modall";

const Header = () => {
  const [rotate, setRotate] = useState(false);
  const [itens, setItens] = useState(false);
  let h,
    rot1,
    rot2 = "";
  if (rotate) {
    rot1 = "rotate(-45deg) translate(-8px, 8px) ";
    rot2 = "rotate(45deg) translate(-5px, -7px) ";
    h = "0";
  }
  const handleClick = () => {
    setItens(!itens);
    setRotate(!rotate);
  };

  return (
    <>
      <S.Container>
        <nav>
          <div className="jorge">JORGE GURGEL</div>
          <S.Logo href="/">J</S.Logo>
          {itens && (
            <>
              <Modall />
            </>
          )}
          <S.MobileMenu onClick={handleClick}>
            <div style={{ transform: rot1 }}></div>
            <div style={{ opacity: h }} className="line2"></div>

            <div
              style={{ transform: rot2 }}
              onClick={() => setRotate(!rotate)}
            ></div>
          </S.MobileMenu>
          <S.NavList>
            <li>
              <S.Alink href="/" onClick={() => alert("oi")}>
                {" "}
                trabalhos
              </S.Alink>
            </li>
            <li>
              <S.Alink href="/"> sobre mim</S.Alink>
            </li>
            <li>
              <S.Alink href="/"> redes sociais</S.Alink>
            </li>
            <li>
              <S.Alink href="/"> contatos</S.Alink>
            </li>
          </S.NavList>
        </nav>
      </S.Container>
    </>
  );
};

export default Header;
