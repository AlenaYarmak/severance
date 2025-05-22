export const getNearNumbers = (randomNumber, x) => {
    const columnIndex = Math.ceil(randomNumber / x)
    const rowIndex = randomNumber % x
    let arrayNumbers = []
    for (let column = columnIndex - 1; column <= columnIndex + 1; column++) {
        for (let row = rowIndex - 1; row <= rowIndex + 1; row++) {
            if (columnIndex != 1) {
                let num = (columnIndex - 1) * x + rowIndex
                arrayNumbers.push(num)
            } else {
                let num = (columnIndex * x) + rowIndex
                arrayNumbers.push(num)
            }
        }
    }
    return arrayNumbers
}