import React from "react";
import StyledNav from "./styles";
import sideMenuImg from "../../assets/side-menu-img.png";

const Nav = (props) => {
  return (
    <StyledNav showNavMobile={props.showNavMobile}>
      <h1>SLACA 2019</h1>
      <img src={sideMenuImg} alt="SLACA 2019" />
      <ul>
        <li>Apresentação</li>
        <li>Comitês</li>
        <li>Autores</li>
        <li>Eixos temáticos</li>
        <li className="active">Trabalhos</li>
        <li>Contato</li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
