import { Wrapper } from './TerninalScreen.styles'
import Number from '../Number/Number'

const TerminalScreen = ({ cells, rows, columns }) => {
    return (
        <Wrapper rows={rows} columns={columns}>
            {Array.from({ length: cells }).map((_, index) => (
                <Number key={index} />
            ))}
        </Wrapper>
    )
}

export default TerminalScreen;