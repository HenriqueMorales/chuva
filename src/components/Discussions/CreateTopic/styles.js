import styled from "styled-components";

const StyledCreateTopic = styled.div`
  border-bottom: 1px solid hsla(0, 0%, 91%, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
  margin-bottom: 1.4rem;
  padding-bottom: 30px;
  position: relative;

  h6 {
    color: var(--orange);
    font-family: "Roboto", sans-serif;
    font-size: 1.8rem;
  }

  .icons {
    display: flex;
    gap: 50px;
  }

  p {
    font-family: "Quicksand", sans-serif;
    font-size: 1.4rem;
    max-width: 620px;
  }

  button {
    align-items: center;
    background: linear-gradient(180deg, #feb254 0%, #f0813d 100%);
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-family: "Quicksand", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    gap: 6px;
    padding: 6px 12px;
    position: absolute;
    bottom: -15px;
  }
`;

export default StyledCreateTopic;
