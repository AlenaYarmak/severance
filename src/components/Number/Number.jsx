import { NumberStyles } from './Number.styles'

const Number = ({ offsetX, offsetY, animationDelay}) => {
    return (
        <NumberStyles offsetX={offsetX} offsetY={offsetY} animationDelay={animationDelay}>
            2
        </NumberStyles>
    )
}

export default Number;