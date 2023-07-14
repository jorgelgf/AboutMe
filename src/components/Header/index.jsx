import React, { useState } from "react";
import * as S from "./styles";
import Modall from "../modall";

const Header = () => {
  const [rotate, setRotate] = useState(false);
  const [itens, setItens] = useState(false);
  let h,
    boderColor,
    rot1,
    close = "",
    rot2 = "";

  if (rotate) {
    rot1 = "rotate(-45deg) translate(-8px, 8px) ";
    rot2 = "rotate(45deg) translate(-5px, -7px) ";
    h = "0";
    boderColor = "#f01a1a";
    close = "Fechar";
  }
  const handleClick = () => {
    setItens(!itens);
    setRotate(!rotate);
  };

  return (
    <>
      {" "}
      {itens && (
        <>
          <Modall />
        </>
      )}
      <S.Container>
        <nav>
          <div className="jorge">JORGE GURGEL</div>
          <S.Logo href="/">
            <span className="logo">J</span>{" "}
            <span className="name">orge gurgel</span>
          </S.Logo>

          <S.MobileMenu onClick={handleClick}>
            <div
              tiitle={close}
              style={{
                transform: rot1,
                transition: "all .2s",
                backgroundColor: boderColor,
              }}
            ></div>
            <div style={{ opacity: h }} className="line2"></div>

            <div
              style={{
                transform: rot2,
                transition: "all .2s",
                backgroundColor: boderColor,
              }}
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
