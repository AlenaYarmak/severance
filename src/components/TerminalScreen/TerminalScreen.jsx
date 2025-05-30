import { useState } from 'react'
import { Wrapper } from './TerninalScreen.styles'
import Number from '../Number/Number'

const TerminalScreen = ({ 
    cellsAmount, 
    matchesNumbers, 
    rows, 
    columns 
}) => {
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

    const [offsets] = useState(() => 
    cellsAmount.map(() => ({
        offsetX: Math.floor(1 + Math.random() * 8),
        offsetY: Math.floor(1 + Math.random() * 8),
        animationDelay: Math.random() * 6
    }))

);

console.log(offsets);

    return (
        <Wrapper rows={rows} columns={columns}>
            {cellsAmount.map((element, index) => {
                const isMatch = matchesNumbers.some((obj) => obj.index === element.index);
                return (
                    <Number
                        key={element.index}
                        value={element.index}
                        offsetX={offsets[index].offsetX}
                        offsetY={offsets[index].offsetY}
                        animationDelay={offsets[index].animationDelay}
                        index={index}
                        isMatch={isMatch}
                        isMatchHovered={isMatchHovered}
                        onMouseEnter={() => handleMouseEnter(isMatch)}
                        onMouseLeave={() => handleMouseLeave(isMatch)}
                    />
                )
            })}
        {matchesNumbers.map((element, index) => (
            <p>{element.index}</p>
        ))}
        </Wrapper>
    )
}

export default TerminalScreen;