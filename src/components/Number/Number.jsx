import { NumberStyles } from './Number.styles'

const Number = ({ 
    offsetX, 
    offsetY, 
    animationDelay, 
    isMatch, 
    value,
    isMatchHovered,
    onMouseEnter,
    onMouseLeave 
}) => {
    return (
        <NumberStyles 
            offsetX={offsetX} 
            offsetY={offsetY} 
            animationDelay={animationDelay}
            isMatch={isMatch}
            isMatchHovered={isMatchHovered}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {value}
        </NumberStyles>
    )
}

export default Number;