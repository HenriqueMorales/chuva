import styled from "styled-components";

const StyledSubmitTopic = styled.div`
  border-bottom: 1px solid hsla(0, 0%, 91%, 1);
  margin-bottom: 30px;
  padding-bottom: 15px;

  p {
    font-family: "Quicksand", sans-serif;
    font-size: 1.4rem;
    padding-bottom: 22px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h6 {
      color: var(--orange);
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      padding-bottom: 4px;
    }

    input {
      border: 1px solid hsla(0, 0%, 80%, 1);
      border-radius: 4px;
      padding: 10px 24px;
      outline: none;
      width: 100%;
    }

    textarea {
      border: 1px solid hsla(0, 0%, 80%, 1);
      border-radius: 4px;
      padding: 10px 24px;
      outline: none;
      width: 100%;
    }

    .form-footer {
      align-items: center;
      background: hsla(187, 24%, 93%, 1);
      border: 1px solid hsla(0, 0%, 80%, 1);
      border-radius: 4px;
      display: flex;
      justify-content: space-between;

      img {
        padding: 1rem 1.5rem;
      }

      button {
        padding: 8px 66px;
      }
    }
  }
`;

export default StyledSubmitTopic;
