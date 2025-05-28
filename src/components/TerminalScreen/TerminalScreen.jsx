import { Wrapper } from './TerninalScreen.styles'
import Number from '../Number/Number'

const TerminalScreen = ({ cells, rows, columns }) => {
    return (
        <Wrapper rows={rows} columns={columns}>
            {Array.from({ length: cells }).map((_, index) => {
                const offsetX = 1 + Math.random() * 4
                const offsetY = 1 + Math.random() * 4
                return (
                    <Number
                        offsetX={offsetX}
                        offsetY={offsetY}
                        animationDelay={Math.random() * 10}
                        index={index}
                    />
                )
            } )}
        </Wrapper>
    )
}

export default TerminalScreen;