import { createGlobalStyle } from 'styled-components'
import FontFaces from './fontFaces'
import variables from './variables'

const GlobalStyles = createGlobalStyle`
    ${variables}
    ${FontFaces}
    body {
        background-color: green;
        color: var(--light-blue);
        font-family: 'Lexend', sans-serif;
    }`

export default GlobalStyles;