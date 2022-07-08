import React from "react";
import Button from "../Button";
import Topic from "../Topic";
import StyledSuccess from "./styles";
import greyCheckedIcon from "../../../assets/grey-checked.svg";

const Success = (props) => {
  const handleClick = () => {
    props.setShowSuccess(false);
    props.setShowSubmitTopic(true);
  };

  return (
    <StyledSuccess>
      <div className="text-wrapper">
        <h6>Seu tópico foi enviado com sucesso! :D</h6>
        <p>
          Agradecemos por sua contribuição, uma notificação será enviada ao seu
          email assim que seu tópico for respondido!
        </p>
        <p className="underline">Descubra outros trabalhos!</p>
        <div onClick={handleClick}>
          <Button>criar novo tópico</Button>
        </div>
      </div>
      <div className="topic-container">
        <div className="blur">
          <Topic />
        </div>
        <div className="center-content">
          <img src={greyCheckedIcon} alt="Checked icon" />
          <p>Aguardando feedback dos autores</p>
          <p className="edit">Editar tópico</p>
        </div>
      </div>
    </StyledSuccess>
  );
};

export default Success;
