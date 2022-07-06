import styled from "styled-components";

const StyledHeader = styled.header`
  align-items: center;
  background: var(--light-background);
  display: flex;
  height: 68px;

  section {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-left: 36px;
    padding-right: 29px;
    width: 100%;

    div {
      color: #725c5c;

      p {
        font-size: 1.4rem;
      }

      p.big {
        font-size: 2.2rem;
        font-weight: 400;
      }
    }

    article {
      align-items: center;
      border: 1px solid hsla(0, 0%, 80%, 1);
      border-radius: 4px;
      display: flex;
      height: 34px;
      justify-content: space-evenly;
      width: 97px;

      p {
        font-size: 1.4rem;
      }
    }

    .profile {
      align-items: center;
      display: flex;
      text-align: right;
      position: relative;

      img {
        border-radius: 50%;
        height: 30px;
        padding-left: 8px;
      }

      span {
        align-items: center;
        background: red;
        border-radius: 50%;
        color: #fff;
        display: flex;
        height: 12px;
        justify-content: center;
        position: absolute;
        right: 0;
        top: 0;
        width: 12px;
      }
    }
  }
`;

export default StyledHeader;
