import styled from "styled-components";

const StyledAside = styled.aside`
  width: 242px;

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 6px;

    button {
      background: var(--orange);
      border: none;
      border-radius: 4px;
      color: #fff;
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      padding: 6px 12px;
    }

    .download-button {
      align-items: center;
      display: flex;
      gap: 6px;
    }
  }

  .separated-text {
    color: var(--orange);
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 12px 0;
    text-align: right;
  }

  .details {
    border: 1px solid hsla(0, 0%, 93%, 1);
    border-radius: 4px;

    h4 {
      background: var(--light-background);
      font-family: "Roboto", sans-serif;
      font-size: 2rem;
      font-weight: 500;
      padding: 1rem 1.5rem;
    }

    .details-info {
      color: hsla(0, 0%, 36%, 1);
      font-family: "Quicksand", sans-serif;
      height: 100%;
      font-size: 1.2rem;
      line-height: 1.5;
      padding: 1.5rem;

      h6 {
        font-size: 1.4rem;
      }

      .authors {
        margin: 2rem 0;
      }

      .light-color-text {
        color: hsla(0, 7%, 65%, 1);
      }
    }
  }
`;

export default StyledAside;
