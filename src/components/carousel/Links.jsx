import React from "react";
import * as S from "./styles";
import Alert from "../alert";

const Info = ({ github, page }) => {
  return (
    <S.Links>
      <span>
        <a href={github} target="_blank" rel="noreferrer">
          github
        </a>
      </span>
      <span>
        {page !== "" ? (
          <a href={page} target="_blank" rel="noreferrer">
            site
          </a>
        ) : (
          <div onClick={() => Alert()}>site</div>
        )}
      </span>
    </S.Links>
  );
};

export default Info;
//     <div onClick={() => Alert()}>site</div>
