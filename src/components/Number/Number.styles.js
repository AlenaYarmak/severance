import styled from 'styled-components'

export const NumberStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--light-blue);
    font-size: 23px;
    animation: float 3s ease-in-out infinite;
    animation-delay: ${({ animationDelay }) => animationDelay}s;
    transition: font-size 0.4s ease-in-out;

    ${({ isMatch, isMatchHovered }) =>
    isMatch &&
    isMatchHovered &&
    `
      font-size: 35px;
    `}

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