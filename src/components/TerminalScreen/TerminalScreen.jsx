import { Wrapper } from './TerninalScreen.styles'
import Number from '../Number/Number'

const TerminalScreen = ({ cells }) => {
    return (
        <Wrapper>
            {Array.from({ length: cells }).map((_, index) => (
                <Number key={index} />
            ))}
        </Wrapper>
    )
}

export default TerminalScreen;