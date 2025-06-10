import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 90vw;
    height: 60vh;
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, minmax(40px, 1fr))`};
    grid-template-rows: ${({ rows }) => `repeat(${rows}, minmax(40px, 1fr))`}
`

export const Container = styled.div`
    background-color: var(--background-blue);
    width: 90vw;
    height: 80vh;
    border: 1px solid transparent; /* prevent margin collapsing */
`