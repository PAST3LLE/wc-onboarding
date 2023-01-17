import { css, createGlobalStyle } from 'styled-components'

const GlobalVariables = css`
  --theme-text-main: #fff;
  --theme-text-alt: #fff;

  --theme-main: #084046;
  --theme-main-dark: #042023;
  --theme-accent: #13818c;
  --theme-main-alt: lightsalmon;
  --theme-accent-alt: darkblue;

  --purple-bg-light: #a179b6;
  --purple-bg-dark: #741dbb;
  --grey-bg-dark: #282c34;
`

// "!important" override on WalletConnect style variables
// this is ugly but currently the only way to style web3modal
const WalletConnectOverrideVariables = css`
  --color-fg-accent: var(--theme-accent) !important;
  --color-bg-1: var(--theme-main-dark) !important;
  --color-fg-1: #fff !important;
  // gradients
  --gradient-1: var(--theme-main) !important;
  --gradient-2: var(--theme-accent) !important;
  --gradient-3: var(--theme-main) !important;
  --gradient-4: var(--theme-accent) !important;
`

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
    color: var(--main-text-color);
  }

  html {
    font-variant: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
  }

  body {
    background-color: var(--grey-bg-dark);
    background-position: 0 -30vh;
    background-repeat: no-repeat;
  }

  a {
    color: lightblue;
  }

  button {
    user-select: none;
    outline: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  select {
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    // Additional resets for further consistency
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
  }
`

// GLOBAL CSS && CSS RESET
const GlobalCSS = createGlobalStyle`
  :root {
    ${GlobalVariables}
    ${WalletConnectOverrideVariables}
  }

  // RESET and BASE STYLES
  ${BaseAndReset}

  body > div#root {
    height: 100vh;
    display: grid;
    grid-template-areas:  'header header'
                          'nav main'
                          'footer footer';
    grid-template-columns: minmax(auto, max-content) 5fr;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
  }

  header {
    height: 0.5rem;
    grid-area: header;
  }

  footer {
    grid-area: footer;
  }

  nav {
    grid-area: nav;
  }

  article {
    grid-area: main;
  }

  nav, article {
    overflow-y: auto;
  }
`

export default GlobalCSS
