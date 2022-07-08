import React from "react";
import footerImage from "../../assets/footer-image.png";
import StyledFooter from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <img src={footerImage} alt="Logo Galoá" />
    </StyledFooter>
  );
};

export default Footer;
