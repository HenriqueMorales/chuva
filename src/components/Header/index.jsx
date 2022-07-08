import React from "react";
import StyledHeader from "./styles";
import languageImage from "../../assets/language-image.svg";
import dropdown from "../../assets/dropdown.svg";
import profilePic from "../../assets/profile-pic.png";
import menuIcon from "../../assets/menu.svg";

const Header = (props) => {
  const handleClick = () => {
    props.setShowNavMobile((prevValue) => !prevValue);
  };
  return (
    <StyledHeader>
      <section>
        <div className="menu-text-wrapper">
          <img
            className="menu"
            src={menuIcon}
            alt="Menu"
            onClick={handleClick}
          />
          <div className="text">
            <p>Anais do Simpósio Latino Americano de Ciências de Alimentos</p>
            <p className="big">
              Anais do 13º Simpósio Latino Americano de Ciência de Alimentos
            </p>
            <p>ISSN: 1234-5678</p>
          </div>
        </div>
        <div className="dropdown-profile-wrapper">
          <article>
            <img src={languageImage} />
            <p>PT, BR</p>
            <img src={dropdown} />
          </article>
          <div className="profile">
            <div className="profile-info">
              <p>Bem vindo!</p>
              <p>alguem12@galoascience.com</p>
            </div>
            <img src={profilePic} alt="Foto de perfil" />
            <span>2</span>
          </div>
        </div>
      </section>
    </StyledHeader>
  );
};

export default Header;
