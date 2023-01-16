import { createGlobalStyle, css } from 'styled-components'

const BaseAndReset = css`
  * {
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 0px;
      border-radius: 16px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ghostwhite;
      border-radius: 16px;
      background-clip: padding-box;
    }
  }

  html,
  input,
  textarea,
  button {
    border: none;
    font-family: 'Roboto', 'Inter', sans-serif;
    font-display: fallback;
  }

  @supports (font-variation-settings: normal) {
    html,
    input,
    textarea,
    button {
      font-family: 'Roboto', 'Inter var', sans-serif;
    }
  }

  html,
  body {
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  html {
    font-variant: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
  }

  a {
    color: lightblue;
  }

  button {
    user-select: none;
    outline: none;

    // set all buttons to have rounded edges and "pointer" cursor - uncomment to enable
    // border-radius: 0.5rem;
    // cursor: pointer;
  }
`

export const GlobalCSS = createGlobalStyle`
  // RESET and BASE styles
  ${BaseAndReset}
`

export default GlobalCSS
