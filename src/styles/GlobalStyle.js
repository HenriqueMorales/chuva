import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --light-background: hsla(20, 82%, 96%, 1);
        --orange: hsla(21, 83%, 58%, 1);
    }
    * {
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
    }

    .app {
        display: flex;
        flex-basis: 1;

        .header-content-wrapper {
            flex-grow: 1;

            .content {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                padding: 20px 44px;
            }
        }

        .modal {
      background-color: rgba(0, 0, 0, 0.2);
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 10;
    }
    }
    
`;
