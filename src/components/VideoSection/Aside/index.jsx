import React from "react";
import StyledAside from "./styles";
import downloadImg from "../../../assets/download.svg";
import starImg from "../../../assets/star.svg";
import doiImg from "../../../assets/doi.svg";

const Aside = () => {
  return (
    <StyledAside>
      <div className="buttons">
        <button className="download-button">
          <img src={downloadImg} />
          Download
        </button>
        <button>
          <img src={starImg} />
        </button>
        <button>
          <img src={doiImg} />
        </button>
      </div>

      <p className="separated-text">COMO CITAR ESSE TRABALHO?</p>

      <div className="details">
        <h4>Detalhes</h4>
        <div className="details-info">
          <p>
            Tipo de Apresentação: <strong>Pôster</strong>
          </p>
          <p>
            Eixo temático: <strong>Alimentação e saúde (AS)</strong>
          </p>
          <p>
            Palavras-chaves:
            <strong>Alimentos funcionais, alimentação escolar.</strong>
          </p>

          <div className="authors">
            <h6>Autores:</h6>
            <p>Galileo Galilei¹</p>
            <p>Berta Lange de Morretes²</p>
            <p>Isaac Newton³</p>
            <p>Cesar Lattes¹</p>
            <p>Stephen Hawking⁴</p>
          </div>

          <div className="light-color-text">
            <p>¹Universidade Estadual de Campinas</p>
            <p>
              ²Universidade de São Paulo ³Instituto Nacional de Pesquisas
              Espaciais
            </p>
            <p> ⁴Universidade Federal do Rio de Janeiro</p>
          </div>
        </div>
      </div>
    </StyledAside>
  );
};

export default Aside;
