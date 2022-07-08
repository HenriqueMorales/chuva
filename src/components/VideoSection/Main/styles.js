import styled from "styled-components";

const StyledMain = styled.main`
  font-family: "Roboto", sans-serif;
  max-width: 800px;

  .video {
    color: #fff;
    max-width: 100%;
    position: relative;

    .video-img {
      width: 100%;
    }

    .video-info {
      background: hsla(21, 92%, 29%, 0.5);
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      left: 0;
      top: 0;
      padding: min(32px, 2.4vw);
      padding-bottom: min(60px, 8vw);
      position: absolute;
      width: 100%;

      .video-title {
        font-size: min(2.4rem, 2.4vw);
      }

      .person {
        display: flex;
        gap: 1.6rem;

        img {
          border-radius: 50%;
          box-shadow: 0 0 0 1px hsla(21, 92%, 29%, 0.5), 0 0 0 2px var(--orange);
          height: min(75px, 7vw);
        }

        .name {
          font-size: min(3.4rem, 2.8vw);
        }

        p {
          font-size: min(2rem, 1.7vw);
          font-weight: 700;
        }
      }
    }
  }

  .title {
    color: var(--orange);
    font-size: 2rem;
    padding-bottom: 2rem;
  }
`;

export default StyledMain;
