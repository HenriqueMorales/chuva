import React from "react";
import Button from "../Button";
import Topic from "../Topic";
import StyledSuccess from "./styles";

const Success = () => {
  return (
    <StyledSuccess>
      <div className="text-wrapper">
        <h6>Seu tópico foi enviado com sucesso! :D</h6>
        <p>
          Agradecemos por sua contribuição, uma notificação será enviada ao seu
          email assim que seu tópico for respondido!
        </p>
        <p className="underline">Descubra outros trabalhos!</p>
        <Button>criar novo tópico</Button>
      </div>
      <Topic />
    </StyledSuccess>
  );
};

export default Success;
