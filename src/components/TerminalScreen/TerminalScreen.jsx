import { useState } from 'react'
import { Wrapper } from './TerninalScreen.styles'
import Number from '../Number/Number'

const TerminalScreen = ({ cellsAmount, matchesNumbers, rows, columns }) => {
    const [isMatchHovered, setIsMatchHovered] = useState(false);

    const handleMouseEnter = (isMatch) => {
        if (isMatch) {
            setIsMatchHovered(true);
        }
    };

    const handleMouseLeave = (isMatch) => {
        if (isMatch) {
            setIsMatchHovered(false);
        }
    };
    return (
        <Wrapper rows={rows} columns={columns}>
            {cellsAmount.map((element, index) => {
                const offsetX = 1 + Math.random() * 4
                const offsetY = 1 + Math.random() * 4
                const isMatch = matchesNumbers.some((obj) => obj.index === element.index);
                return (
                    <Number
                        key={element.index}
                        value={element.number}
                        offsetX={offsetX}
                        offsetY={offsetY}
                        animationDelay={Math.random() * 6}
                        index={index}
                        isMatch={isMatch}
                        isMatchHovered={isMatchHovered}
                        onMouseEnter={() => handleMouseEnter(isMatch)}
                        onMouseLeave={() => handleMouseLeave(isMatch)}
                    />
                )
            })}
        </Wrapper>
    )
}

export default TerminalScreen;