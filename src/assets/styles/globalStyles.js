import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyles = createGlobalStyle`
    ${variables}
    body {
        background-color: green;
        color: var(--light-blue);
    }`

export default GlobalStyles;