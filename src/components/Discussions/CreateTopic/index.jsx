import React from "react";
import StyledCreateTopic from "./styles";
import icon1 from "../../../assets/icon1.svg";
import icon2 from "../../../assets/icon2.svg";
import icon3 from "../../../assets/icon3.svg";
import iconCreate from "../../../assets/icon-create.svg";
import Button from "../Button";

const CreateTopic = (props) => {
  const handleClick = () => {
    props.setShowCreateTopic(false);
    props.setShowSubmitTopic(true);
  };
  return (
    <StyledCreateTopic>
      <h6>Compartilhe suas ideias ou dúvidas com os autores!</h6>

      <div className="icons">
        <img src={icon1} alt="icon" />
        <img src={icon2} alt="icon" />
        <img src={icon3} alt="icon" />
      </div>

      <p>
        Sabia que o maior estímulo no desenvolvimento científico e cultural é a
        curiosidade? Deixe seus questionamentos ou sugestões para o autor!
      </p>

      <div className="button-div" onClick={handleClick}>
        <Button>
          <img src={iconCreate} alt="Create" />
          criar tópico
        </Button>
      </div>
    </StyledCreateTopic>
  );
};

export default CreateTopic;
