import React from "react";
import StyledAnswer from "./styles";
import checkedIcon from "../../../assets/checked.svg";

const Answer = (props) => {
  return (
    <StyledAnswer>
      <div className="name-role-wrapper">
        <p className="name">{props.name}</p>
        <div className="role">
          <p>{props.role}</p>
          {props.role && <img src={checkedIcon} alt="Symbol" />}
        </div>
      </div>

      <div className="message">
        <p>{props.firstP}</p>
        <p>{props.secondP}</p>
      </div>
    </StyledAnswer>
  );
};

export default Answer;
