export const getRandomNumber = (col, row) => {
    const maxInteger = col * row
    let exceptNumbers = []
    const possibleNumbers = []
    /* for first row */
    for (let index = 1; index <= col; index++) {
      exceptNumbers.push(index)
    }
    /* for first and last columns */
    for (let index = 2; index < row; index++) {
      exceptNumbers.push((index * col) - (col - 1))
      exceptNumbers.push((index * col))
    }
    /* for last row */
    for (let index = ((col * row) - (col - 1)); index <= (col * row); index++) {
      exceptNumbers.push(index)
    }
    
    for (let index = 1; index <= maxInteger; index++) {
        if (!exceptNumbers.includes(index)) {
        possibleNumbers.push(index);
        }
    }

    const randomIndex = Math.floor(Math.random() * possibleNumbers.length)

    return possibleNumbers[randomIndex]
}