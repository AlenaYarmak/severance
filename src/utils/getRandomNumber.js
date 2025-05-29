export const getRandomNumber = (col, row) => {
    let exceptNumbers = []
    /* for first row */
    for (let index = 1; index <= col; index++) {
      exceptNumbers.push(index)
      console.log('test')
    }
    /* for first and last columns */
    for (let index = 2; index < row; index++) {
      exceptNumbers.push((index * col) - (col - 1))
      exceptNumbers.push((index * col))
    }
    /* for last row */
    for (let index = ((col * row) - (col - 1)); index <= (col * row); index++) {
      exceptNumbers.push(index)
      console.log('work')
    }
    return exceptNumbers
}