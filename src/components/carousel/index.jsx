import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as S from "./styles";
import Info from "./Links";
const Carousel = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  return (
    <S.Container>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div className="item">
            <img
              src="https://user-images.githubusercontent.com/47546263/188325966-df90a7fb-cba6-4076-833c-b8f5c7fc23f3.png"
              alt="sujeito pizza"
            />
            <Info github="https://github.com/jorgelgf/pizzaria" page="" />
          </motion.div>
          <motion.div className="item">
            <img
              src="https://camo.githubusercontent.com/78c51202d1888b7ca005344d7215d00c694864e6e1f9873e4da7f3475c9accfd/68747470733a2f2f692e6962622e636f2f3446595a6a79392f312d6d696e2e706e67"
              alt="sua água"
            />
            <Info
              github="https://github.com/jorgelgf/agua"
              page="https://agua-site.netlify.app/"
            />
          </motion.div>
          <motion.div className="item">
            <img
              src="https://camo.githubusercontent.com/ef619407acd57eb40dadc86400430a7df1b3be66c80ccc3d9b58294ab3e0a785/68747470733a2f2f692e6962622e636f2f796662776873592f696d672e706e67"
              alt="cronologia"
            />
            <Info
              github="https://github.com/jorgelgf/cronologia"
              page="https://chronology.netlify.app/"
            />
          </motion.div>
          <motion.div className="item">
            <img
              src="https://camo.githubusercontent.com/a4770116288a6fdfbe7fa2dddeb91902d8b992d1e439e060eb8fcfcd28f3035f/68747470733a2f2f692e6962622e636f2f304b7343444b562f6465736b746f702e706e67"
              alt="sunny lenses"
            />
            <Info
              github="https://github.com/jorgelgf/sunny-lenses"
              page="https://sunny-lenses.netlify.app/"
            />
          </motion.div>
          <motion.div className="item">
            <img
              src="https://camo.githubusercontent.com/85ec63bde5e60459c566f768a05b4b8fb05f87b35dbaeb9836415d53614f1922/68747470733a2f2f692e6962622e636f2f6b58516a746e322f6d6f62696c652e706e67"
              alt="calculadora"
            />
            <Info
              github="https://github.com/jorgelgf/my-Calculator"
              page="https://jl-calculator.netlify.app/"
            />
          </motion.div>
          <motion.div className="item">
            <img
              src="https://camo.githubusercontent.com/1b746b4581a10d7211b99a63903e216faf8a814860becfd52610bdc7301bcdda/68747470733a2f2f692e6962622e636f2f4b6a726a5170712f6d6f62696c652e706e67"
              alt="minhas notas"
            />
            <Info
              github="https://github.com/jorgelgf/notes"
              page="https://notes-jl.netlify.app/"
            />
          </motion.div>

          <motion.div className="item">
            <img
              src="https://camo.githubusercontent.com/bbff6d781111da630606e7f9a718335cb0cfe573ccd0ee57ff16618a1d9d9913/68747470733a2f2f75706c6f61646465696d6167656e732e636f6d2e62722f696d616765732f3030332f3539352f3534382f6f726967696e616c2f6465736b746f702e706e673f31363430303036303937"
              alt="Gbook"
            />
            <Info
              github="https://github.com/jorgelgf/gbook"
              page="https://findbook-mypage.netlify.app/"
            />
          </motion.div>
          <motion.div className="item">
            <img
              src="https://camo.githubusercontent.com/4794cb63621d8ce3ed812d30d765786877b51ce0522db2c133f1a0470b80a204/68747470733a2f2f692e6962622e636f2f647033433132442f6d6f62696c652e706e67"
              alt="site pokemon"
            />
            <Info
              github="https://github.com/jorgelgf/pokemon-site"
              page="https://pokemon-jl.netlify.app/"
            />
          </motion.div>

          <motion.div className="item">
            <img
              src="https://camo.githubusercontent.com/3cc2c429cf6139a5417b5edad85255fffff7c65c0c1fbe465fff023f67c3d37b/68747470733a2f2f692e6962622e636f2f78314d4637704a2f6d6f62696c652e706e67"
              alt="galeria de fotos"
            />
            <Info
              github="https://github.com/jorgelgf/firebase-gallery"
              page=""
            />
          </motion.div>
          <motion.div className="item">
            <img
              src="https://camo.githubusercontent.com/d0ac195788d681f9a8bf96628df3c70509b9e8030b848dae52890551128205fd/68747470733a2f2f692e6962622e636f2f487853333671472f6465736b2e706e67"
              alt="my cep"
            />
            <Info
              github="https://github.com/jorgelgf/MyCep"
              page="https://mycep.netlify.app/"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </S.Container>
  );
};

export default Carousel;
