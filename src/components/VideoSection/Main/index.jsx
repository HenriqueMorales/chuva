import React from "react";
import StyledMain from "./styles";
import videoImg from "../../../assets/video.png";
import personImg from "../../../assets/person.png";

const Main = () => {
  return (
    <StyledMain className="title-and-video">
      <h4 className="title">
        Análise sensorial de preparações funcionais desenvolvidas para escolares
        entre 09 e 15 anos, do município de Campinas/SP
      </h4>

      <div className="video">
        <img className="video-img" src={videoImg} alt="Vídeo" />
        <div className="video-info">
          <h4 className="video-title">
            Análise sensorial de preparações funcionais desenvolvidas para
            escolares entre 09 e 15 anos, do município de Campinas/SP{" "}
          </h4>

          <div className="person">
            <img src={personImg} alt="Pessoa" />

            <div>
              <h4 className="name">Beatriz Christiane Melo</h4>
              <p>FCA / Universidade Estadual de Campinas</p>
            </div>
          </div>
        </div>
      </div>
    </StyledMain>
  );
};

export default Main;
