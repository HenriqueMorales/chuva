import { useState } from "react";
import H4 from "../H4";
import Answer from "./Answer";
import CreateTopic from "./CreateTopic";
import StyledDiscussions from "./styles";
import SubmitTopic from "./SubmitTopic";
import Success from "./Success";
import Topic from "./Topic";

const Discussions = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  const [showCreateTopic, setShowCreateTopic] = useState(true);
  const [showSubmitTopic, setShowSubmitTopic] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  console.log(showCreateTopic);
  return (
    <StyledDiscussions>
      <H4>Discussões</H4>
      <div className="create-topic-wrapper">
        {showCreateTopic && (
          <CreateTopic
            setShowCreateTopic={setShowCreateTopic}
            setShowSubmitTopic={setShowSubmitTopic}
          />
        )}

        {showSubmitTopic && (
          <SubmitTopic
            setShowSubmitTopic={setShowSubmitTopic}
            setShowSuccess={setShowSuccess}
          />
        )}

        {showSuccess && (
          <Success
            setShowSubmitTopic={setShowSubmitTopic}
            setShowSuccess={setShowSuccess}
          />
        )}

        <Topic />

        <div
          className="answers-div"
          onClick={() => setShowAnswers(!showAnswers)}
        >
          <Topic />
          {showAnswers && (
            <div>
              <Answer
                name={"Adriano da Silva"}
                role={"Autor"}
                firstP={
                  "Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
                }
              />
              <Answer
                name={"Carlos Henrique Santos"}
                firstP={
                  "Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo."
                }
                secondP={
                  "Obrigada pela resposta, muito interessante o seu trabalho! "
                }
              />
              <Answer
                name={"Carmila Ferreira Andrade"}
                role={"Coautor"}
                firstP={
                  "Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
                }
                secondP={
                  "Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
                }
              />
              <Answer
                name={"Ana Carolina"}
                role={"Coautor"}
                firstP={
                  "Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
                }
              />
            </div>
          )}
        </div>
      </div>
    </StyledDiscussions>
  );
};

export default Discussions;
