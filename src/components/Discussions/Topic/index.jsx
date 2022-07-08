import React from "react";
import StyledTopic from "./styles";
import infoIcon from "../../../assets/info.svg";
import likeIcon from "../../../assets/favoritar.svg";

const Topic = () => {
  return (
    <StyledTopic>
      <div className="subject-and-name">
        <h6 className="subject">Assunto da pergunta aparece aqui</h6>
        <p className="name">Carlos Henrique Santos</p>
      </div>

      <p className="message">
        Comecinho da pergunta aparece aqui resente relato inscreve-se no campo
        da análise da dimensão e impacto de processo formativo situado impacto
        de processo formativo processo...
      </p>

      <div className="topic-footer">
        <img src={infoIcon} alt="Info icon" />
        <img src={likeIcon} alt="Like icon" />
        <span>1 like</span>
        <span>1 resposta</span>
      </div>
    </StyledTopic>
  );
};

export default Topic;
