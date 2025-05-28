export const getRandomArrayNumbers = (arrayLength) => {
    let arrayNumbers = []
    for (let i = 0; i < arrayLength; i++) {
        let randomNumber = Math.floor(Math.random() * 10)
        arrayNumbers.push(randomNumber)
    }
    return arrayNumbers
}