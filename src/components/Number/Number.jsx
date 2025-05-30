import { memo } from 'react'
import { NumberStyles, InnerNumber } from './Number.styles'

const Number = memo(({ 
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
            animationDelay={animationDelay}
            offsetX={offsetX} 
            offsetY={offsetY}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <InnerNumber
                isMatch={isMatch}
                isMatchHovered={isMatchHovered}
                >
                {value}
            </InnerNumber>
        </NumberStyles>
    )
}, (prevProps, nextProps) => {
    return (
        prevProps.isMatch === nextProps.isMatch &&
        prevProps.isMatchHovered === nextProps.isMatchHovered &&
        prevProps.value === nextProps.value
    )
})

export default Number;