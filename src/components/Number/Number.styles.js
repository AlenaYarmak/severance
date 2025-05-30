import styled from 'styled-components'

export const NumberStyles = styled.div`
  background: ${({ isMatchHovered }) => isMatchHovered ? 'red' : 'transparent'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--light-blue);
    /* font-size: 23px; */
    animation: float 3s ease-in-out infinite;
    animation-delay: ${({ animationDelay }) => animationDelay}s;

    

    @keyframes float {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(${({ offsetX }) => offsetX}px, ${({ offsetY }) => offsetY}px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`
export const InnerNumber = styled.div`
  font-size: 23px;
  color: var(--light-blue);
  transition: all 1.3s;

  ${({ isMatch, isMatchHovered }) =>
    isMatch &&
    isMatchHovered &&
    `
      color: green;
      font-size: 28px;
    `}
`