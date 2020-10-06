import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  :root {
    --Blue: #2b3945;           /* (Dark Mode Elements) */
    --DarkBlue: #202c37;       /* (Dark Mode Background) */
    --VeryDarkBlue: #111517;   /* (Light Mode Text) */
    --DarkGray: #858585;       /* (Light Mode Input) */
    --VeryLightGray: #fafafa;  /* (Light Mode Background) */
    --White: #ffffff;          /* (Dark Mode Text & Light Mode Elements) */
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background-color: var(--DarkBlue);
    color: var(--White);
    font-family: 'NunitoSansSemiBold';
    font-size: 1.6rem;
    font-weight: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
