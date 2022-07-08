import styled from "styled-components";

const StyledSummary = styled.section`
  border: 1px solid hsla(0, 0%, 93%, 1);
  border-radius: 4px;
  cursor: pointer;

  .text {
    padding: 1.5rem;

    p {
      color: hsla(0, 0%, 36%, 1);
      font-family: "Quicksand", sans-serif;
      font-size: 1.4rem;
      line-height: 1.5;
    }

    span {
      color: var(--orange);
      font-weight: 700;

      ::before {
        content: " ...";
        color: hsla(0, 0%, 36%, 1);
      }
    }

    .spacing {
      padding-top: 2.2rem;
    }
  }
`;

export default StyledSummary;
