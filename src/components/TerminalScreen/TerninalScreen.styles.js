import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: var(--background-blue);
    width: 90vw;
    height: 70vh;
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`}
`