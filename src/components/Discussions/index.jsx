import React from "react";
import H4 from "../H4";
import CreateTopic from "./CreateTopic";
import StyledDiscussions from "./styles";
import Topic from "./Topic";

const Discussions = () => {
  return (
    <StyledDiscussions>
      <H4>Discussões</H4>
      <div className="create-topic-wrapper">
        <CreateTopic />
        <Topic />
        <Topic />
      </div>
    </StyledDiscussions>
  );
};

export default Discussions;
