export const getNearNumbers = (randomNumber, columns) => {
    const columnIndex = Math.ceil(randomNumber / columns)
    const rowIndex = randomNumber % columns
    let arrayNumbers = []
    for (let column = columnIndex - 1; column <= columnIndex + 1; column++) {
        for (let row = rowIndex - 1; row <= rowIndex + 1; row++) {
            if (column > 0 && row > 0 && column <= columns && row <= columns) {
                let num = (column - 1) * columns + row
                arrayNumbers.push(num)
            }
        }
    }

    let randomIndex = Math.floor(Math.random() * arrayNumbers.length)
    if (randomIndex === 4) {
        randomIndex++
    }
    arrayNumbers.splice(randomIndex, 1)

    return arrayNumbers
}