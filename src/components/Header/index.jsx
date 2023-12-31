import React, { useState } from "react";
import * as S from "./styles";
import Modall from "../modall";
import { useNavigate } from "react-router";

const Header = () => {
  const [rotate, setRotate] = useState(false);
  const [itens, setItens] = useState(false);
  const navigate = useNavigate();
  let h,
    colorClose,
    rot1,
    close = "",
    rot2 = "";

  if (rotate) {
    rot1 = "rotate(-45deg) translate(-8px, 8px) ";
    rot2 = "rotate(45deg) translate(-5px, -7px) ";
    h = "0";
    colorClose = "#f01a1a";
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
                backgroundColor: colorClose,
              }}
            ></div>
            <div style={{ opacity: h }} className="line2"></div>

            <div
              style={{
                transform: rot2,
                transition: "all .2s",
                backgroundColor: colorClose,
              }}
              onClick={() => setRotate(!rotate)}
            ></div>
          </S.MobileMenu>
          <S.NavList>
            <li>
              <S.Alink href="/" onClick={() => navigate("/works")}>
                {" "}
                Projetos
              </S.Alink>
            </li>
            <li>
              <S.Alink href="/" onClick={() => navigate("/aboutMe")}>
                {" "}
                Sobre mim
              </S.Alink>
            </li>

            <li>
              <S.Alink href="/"> Contatos</S.Alink>
            </li>
          </S.NavList>
        </nav>
      </S.Container>
    </>
  );
};

export default Header;
