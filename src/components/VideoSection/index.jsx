import React from "react";
import Aside from "./Aside";
import Main from "./Main";
import StyledVideoSection from "./styles";

const VideoSection = () => {
  return (
    <StyledVideoSection className="video-and-details">
      <Main />
      <Aside />
    </StyledVideoSection>
  );
};

export default VideoSection;
