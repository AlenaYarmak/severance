import { Wrapper } from './TerninalScreen.styles'
import Number from '../Number/Number'

const TerminalScreen = ({ cellsAmount, rows, columns }) => {
    return (
        <Wrapper rows={rows} columns={columns}>
            {cellsAmount.map((element, index) => {
                const offsetX = 1 + Math.random() * 4
                const offsetY = 1 + Math.random() * 4
                return (
                    <Number
                        key={index}
                        value={element}
                        offsetX={offsetX}
                        offsetY={offsetY}
                        animationDelay={Math.random() * 6}
                        index={index}
                    />
                )
            })}
        </Wrapper>
    )
}

export default TerminalScreen;