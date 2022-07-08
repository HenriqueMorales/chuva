import React from "react";
import StyledSubmitTopic from "./styles";
import bShape from "../../../assets/b-shape.svg";
import iShape from "../../../assets/i-shape.svg";
import Button from "../Button";

const SubmitTopic = (props) => {
  const handleClick = () => {
    props.setShowSubmitTopic(false);
    props.setShowSuccess(true);
  };
  return (
    <StyledSubmitTopic>
      <p>
        Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!
      </p>

      <form>
        <label>
          <h6>Assunto</h6>
          <input
            type="text"
            placeholder="Defina um tópico sucinto para notificar os autores..."
          />
        </label>

        <label>
          <h6>Conteúdo</h6>
          <textarea rows="3"></textarea>
        </label>
        <div className="form-footer">
          <div>
            <img src={bShape} alt="B shape" />
            <img src={iShape} alt="I shape" />
          </div>

          <div onClick={handleClick}>
            <Button>Enviar</Button>
          </div>
        </div>
      </form>
    </StyledSubmitTopic>
  );
};

export default SubmitTopic;
