import { NumberStyles } from './Number.styles'

const Number = ({ offsetX, offsetY, animationDelay, value }) => {
    return (
        <NumberStyles offsetX={offsetX} offsetY={offsetY} animationDelay={animationDelay}>
            {value}
        </NumberStyles>
    )
}

export default Number;