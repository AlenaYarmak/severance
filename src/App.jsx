import MainPage from './views/MainPage'
import { calculateItemsCount } from './utils/calculateItemCount'
import { getRandomArrayNumbers } from './utils/getRandomArrayNumbers'
import { getRandomNumber } from './utils/getRandomNumber'
import { getNearNumbers } from './utils/getNearNumbers'

const App = () => {

  /* define rows and columns here */
  const rows = 9
  const columns = 15
  const cellsAmount = calculateItemsCount(rows, columns)
  const randomArrayNumbers = getRandomArrayNumbers(cellsAmount)
  const specialNumber = getRandomNumber(columns, rows)
  const arrayWithSpecialNumbers = getNearNumbers(specialNumber, columns)
  console.log(randomArrayNumbers)
  console.log(arrayWithSpecialNumbers)

  return (
    <>
     <h1>Severance</h1>
     <MainPage cellsAmount={randomArrayNumbers} rows={rows} columns={columns}/>
    </>
  )
}

export default App
