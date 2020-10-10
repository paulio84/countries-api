import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --Blue: #2b3945;           /* (Dark Mode Elements) */
    --DarkBlue: #202c37;       /* (Dark Mode Background) */
    --VeryDarkBlue: #111517;   /* (Light Mode Text) */
    --DarkGray: #858585;       /* (Light Mode Input) */
    --VeryLightGray: #fafafa;  /* (Light Mode Background) */
    --White: #ffffff;          /* (Dark Mode Text & Light Mode Elements) */

    /* default to dark mode*/
    --color: var(--White);
    --background-color: var(--DarkBlue);
    --elements: var(--Blue);
    --box-shadow: 0px 0px 0px 4px rgba(17, 21, 23, 0.05);
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background-color: var(--background-color);
    color: var(--color);
    font-family: 'NunitoSansSemiBold';
    font-size: 1.6rem;
    font-weight: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    height: auto;
    width: 100%;
  }

  .lightMode {
    --color: var(--VeryDarkBlue);
    --background-color: var(--VeryLightGray);
    --elements: var(--White);
    --box-shadow: 0px 0px 0px 4px rgba(133, 133, 133, 0.03);
  }
`;
