import { createGlobalStyle } from "styled-components";

export const color = {
    white: '#ffffff',
    pink: '#e66767',
    lightPink: '#ffebd9',
}

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif
    }

    body {
        background-color: ${color.white};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-witdh: ${breakpoints.desktop}) {
            max-width: 80%;
        }
    }
`

