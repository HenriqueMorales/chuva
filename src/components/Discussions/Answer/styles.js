import styled from "styled-components";

const StyledAnswer = styled.div`
  background: hsla(0, 0%, 97%, 1);
  border: 1px solid hsla(0, 0%, 91%, 1);
  padding: 1.6rem 2.4rem;

  .name-role-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;

    .name {
      font-family: "Quicksand", sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
    }

    .role {
      display: flex;
      gap: 1rem;

      p {
        color: var(--orange);
        font-family: "Quicksand", sans-serif;
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
  }

  .message {
    font-family: "Quicksand", sans-serif;
    font-size: 1.4rem;

    p {
      padding: 1rem 0 0rem 0;
    }
  }
`;

export default StyledAnswer;
