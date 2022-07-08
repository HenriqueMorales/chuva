import styled from "styled-components";

const StyledSuccess = styled.div`
  .text-wrapper {
    border-bottom: 1px solid hsla(0, 0%, 91%, 1);
    margin-bottom: 30px;
    text-align: center;
    position: relative;

    h6 {
      color: var(--orange);
      font-family: "Roboto", sans-serif;
      font-size: 1.8rem;
    }

    p {
      font-family: "Quicksand", sans-serif;
      font-size: 1.4rem;
      padding: 18px 0 30px 0;
    }

    .underline {
      color: var(--orange);
      font-weight: 500;
      margin-bottom: 65px;
      padding: 0;
      text-decoration: underline;
    }

    button {
      border-radius: 4px;
      bottom: -16px;
      left: calc(50% - 118px);
      padding: 8px 56px;
      position: absolute;
    }
  }
`;

export default StyledSuccess;
