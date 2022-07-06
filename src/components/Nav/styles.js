import styled from "styled-components";

const StyledNav = styled.nav`
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.2);
  height: 100%;
  flex-shrink: 0;
  width: 202px;

  h1 {
    align-items: center;
    background: linear-gradient(180deg, #ffb354 0%, #ee7a3a 100%);
    color: #fff;
    display: flex;
    font-family: "Roboto", sans-serif;
    font-size: 2.2rem;
    height: 68px;
    justify-content: center;

    width: 100%;
  }

  img {
    width: 100%;
  }

  ul {
    font-family: "Quicksand", sans-serif;
    font-size: 1.5rem;
    width: 100%;

    li {
      border-bottom: 2px solid rgba(0, 0, 0, 0.1);
      padding: 7px 0 7px 24px;
    }

    li.active {
      background: var(--light-background);
      border-left: 4px solid var(--orange);
    }
  }
`;

export default StyledNav;
