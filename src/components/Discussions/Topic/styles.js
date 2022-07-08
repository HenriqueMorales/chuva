import styled from "styled-components";

const StyledTopic = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 1.8rem 2.4rem;

  .subject-and-name {
    .subject {
      color: var(--orange);
      font-family: "Quicksand", sans-serif;
      font-size: 1.6rem;
    }

    .name {
      font-family: "Quicksand", sans-serif;
      font-size: 1.2rem;
      font-weight: 500;
      padding-top: 2px;
    }
  }

  .message {
    color: hsla(0, 0%, 30%, 1);
    font-family: "Quicksand", sans-serif;
    font-size: 1.4rem;
    padding: 1rem 0 1.4rem 0;
  }

  .topic-footer {
    align-items: center;
    display: flex;
    gap: 1.5rem;

    span {
      color: hsla(0, 0%, 46%, 1);
      font-size: 1.4rem;
    }
  }
`;

export default StyledTopic;
